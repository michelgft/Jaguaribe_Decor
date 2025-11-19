import { produtos } from './store.js';

export class Carrinho {
    constructor() {
        this.itens = JSON.parse(localStorage.getItem('carrinho_jaguaribe')) || [];
        this.init();
    }

    init() {
        this.injetarBotaoCarrinho();
        this.atualizarBadge();
        this.configurarEventos();
        this.renderizarCarrinhoModal();
    }

    injetarBotaoCarrinho() {
        if (!document.querySelector('.btn-carrinho')) {
            const navbar = document.querySelector('#navbar-default ul');
            if (navbar) {
                const carrinhoHTML = `
                    <li class="carrinho-container">
                        <button class="btn-carrinho">
                            <i class="fas fa-shopping-cart"></i>
                            <span id="carrinho-badge" class="carrinho-badge">0</span>
                        </button>
                    </li>
                `;
                navbar.insertAdjacentHTML('beforeend', carrinhoHTML);
            }
        }
    }

    configurarEventos() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-adicionar-carrinho')) {
                const produtoId = parseInt(e.target.dataset.id);
                this.adicionarItem(produtoId);
            }
            
            if (e.target.closest('.btn-remover-carrinho')) {
                const btn = e.target.closest('.btn-remover-carrinho');
                const produtoId = parseInt(btn.dataset.id);
                this.removerItem(produtoId);
            }

            if (e.target.closest('.btn-diminuir')) {
                const btn = e.target.closest('.btn-diminuir');
                const produtoId = parseInt(btn.dataset.id);
                this.alterarQuantidade(produtoId, -1);
            }

            if (e.target.closest('.btn-aumentar')) {
                const btn = e.target.closest('.btn-aumentar');
                const produtoId = parseInt(btn.dataset.id);
                this.alterarQuantidade(produtoId, 1);
            }

            if (e.target.closest('.btn-carrinho')) {
                this.abrirCarrinho();
            }

            if (e.target.closest('.btn-fechar-carrinho') || 
                e.target.classList.contains('overlay-carrinho')) {
                this.fecharCarrinho();
            }

            if (e.target.closest('.btn-limpar-carrinho')) {
                this.limparCarrinho();
            }

            if (e.target.closest('.btn-finalizar-compra')) {
                this.finalizarCompra();
            }

            if (e.target.closest('.btn-continuar-comprando')) {
                this.fecharCarrinho();
            }
        });
    }

    adicionarItem(produtoId) {
        const produto = produtos.find(p => p.id === produtoId);
        if (!produto) return;

        const itemExistente = this.itens.find(item => item.id === produtoId);
        
        if (itemExistente) {
            itemExistente.quantidade += 1;
        } else {
            this.itens.push({
                ...produto,
                quantidade: 1
            });
        }

        this.salvarNoLocalStorage();
        this.atualizarBadge();
        this.atualizarCarrinhoModal();
        this.mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
    }

    removerItem(produtoId) {
        this.itens = this.itens.filter(item => item.id !== produtoId);
        this.salvarNoLocalStorage();
        this.atualizarBadge();
        this.atualizarCarrinhoModal();
        this.mostrarNotificacao('Item removido do carrinho!');
    }

    alterarQuantidade(produtoId, alteracao) {
        const item = this.itens.find(item => item.id === produtoId);
        if (!item) return;

        item.quantidade += alteracao;

        if (item.quantidade <= 0) {
            this.removerItem(produtoId);
        } else {
            this.salvarNoLocalStorage();
            this.atualizarBadge();
            this.atualizarCarrinhoModal();
        }
    }

    limparCarrinho() {
        this.itens = [];
        this.salvarNoLocalStorage();
        this.atualizarBadge();
        this.atualizarCarrinhoModal();
        this.mostrarNotificacao('Carrinho limpo!');
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => {
            return total + (item.preco * item.quantidade);
        }, 0);
    }

    calcularTotalItens() {
        return this.itens.reduce((acc, item) => acc + item.quantidade, 0);
    }

    atualizarBadge() {
        const totalItens = this.calcularTotalItens();
        const badge = document.getElementById('carrinho-badge');
        if (badge) {
            badge.textContent = totalItens;
            badge.style.display = totalItens > 0 ? 'flex' : 'none';
        }
    }

    renderizarCarrinhoModal() {
        const modalExistente = document.getElementById('modal-carrinho');
        if (modalExistente) return;

        const modalHTML = `
            <div class="overlay-carrinho" id="overlay-carrinho"></div>
            <div class="modal-carrinho" id="modal-carrinho">
                <div class="carrinho-header">
                    <h3>
                        <i class="fas fa-shopping-cart"></i>
                        Meu Carrinho
                        <span class="badge-carrinho">${this.calcularTotalItens()}</span>
                    </h3>
                    <button class="btn-fechar-carrinho">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="carrinho-body" id="carrinho-body">
                    ${this.renderizarItensCarrinho()}
                </div>
                
                <div class="carrinho-footer">
                    <div class="total-container">
                        <div class="subtotal">
                            <span>Subtotal:</span>
                            <span>R$ ${this.calcularTotal().toFixed(2)}</span>
                        </div>
                        <div class="frete">
                            <span>Frete:</span>
                            <span>Grátis</span>
                        </div>
                        <div class="total-final">
                            <strong>Total:</strong>
                            <strong>R$ ${this.calcularTotal().toFixed(2)}</strong>
                        </div>
                    </div>
                    
                    <div class="acoes-carrinho">
                        <button class="btn-limpar-carrinho" ${this.itens.length === 0 ? 'disabled' : ''}>
                            <i class="fas fa-trash"></i> Limpar Carrinho
                        </button>
                        <button class="btn-finalizar-compra" ${this.itens.length === 0 ? 'disabled' : ''}>
                            <i class="fas fa-credit-card"></i> Finalizar Compra
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    renderizarItensCarrinho() {
        if (this.itens.length === 0) {
            return `
                <div class="carrinho-vazio">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Seu carrinho está vazio</p>
                    <button class="btn-continuar-comprando">Continuar Comprando</button>
                </div>
            `;
        }

        return `
            <div class="itens-carrinho">
                ${this.itens.map(item => `
                    <div class="item-carrinho">
                        <img src="${item.imagem}" alt="${item.nome}" class="item-imagem">
                        <div class="item-info">
                            <h4 class="item-nome">${item.nome}</h4>
                            <p class="item-preco">R$ ${item.preco.toFixed(2)}</p>
                            <div class="controles-quantidade">
                                <button class="btn-diminuir" data-id="${item.id}">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="quantidade">${item.quantidade}</span>
                                <button class="btn-aumentar" data-id="${item.id}">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="item-total">
                            <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
                            <button class="btn-remover-carrinho" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    atualizarCarrinhoModal() {
        if (!document.getElementById('modal-carrinho')) {
            this.renderizarCarrinhoModal();
            return;
        }

        const carrinhoBody = document.getElementById('carrinho-body');
        if (carrinhoBody) {
            carrinhoBody.innerHTML = this.renderizarItensCarrinho();
        }

        const modal = document.getElementById('modal-carrinho');
        if (modal) {
            const badge = modal.querySelector('.badge-carrinho');
            const totalFinal = modal.querySelector('.total-final strong:last-child');
            const subtotal = modal.querySelector('.subtotal span:last-child');
            
            if (badge) badge.textContent = this.calcularTotalItens();
            if (totalFinal) totalFinal.textContent = `R$ ${this.calcularTotal().toFixed(2)}`;
            if (subtotal) subtotal.textContent = `R$ ${this.calcularTotal().toFixed(2)}`;

            const btnLimpar = modal.querySelector('.btn-limpar-carrinho');
            const btnFinalizar = modal.querySelector('.btn-finalizar-compra');
            if (btnLimpar) btnLimpar.disabled = this.itens.length === 0;
            if (btnFinalizar) btnFinalizar.disabled = this.itens.length === 0;
        }

        this.atualizarBadge();
    }

    abrirCarrinho() {
        if (!document.getElementById('modal-carrinho')) {
            this.renderizarCarrinhoModal();
        }

        const modal = document.getElementById('modal-carrinho');
        const overlay = document.getElementById('overlay-carrinho');
        
        if (modal && overlay) {
            modal.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    fecharCarrinho() {
        const modal = document.getElementById('modal-carrinho');
        const overlay = document.getElementById('overlay-carrinho');
        
        if (modal && overlay) {
            modal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    finalizarCompra() {
        if (this.itens.length === 0) return;
        this.mostrarNotificacao('Compra finalizada com sucesso!');
        this.limparCarrinho();
        this.fecharCarrinho();
    }

    salvarNoLocalStorage() {
        localStorage.setItem('carrinho_jaguaribe', JSON.stringify(this.itens));
    }

    mostrarNotificacao(mensagem) {
        const notificacaoExistente = document.querySelector('.notificacao-carrinho');
        if (notificacaoExistente) {
            notificacaoExistente.remove();
        }

        const notificacao = document.createElement('div');
        notificacao.className = 'notificacao-carrinho';
        notificacao.innerHTML = `
            <div class="notificacao-conteudo">
                <i class="fas fa-check-circle"></i>
                <span>${mensagem}</span>
            </div>
        `;

        document.body.appendChild(notificacao);

        setTimeout(() => {
            notificacao.classList.add('show');
        }, 100);

        setTimeout(() => {
            notificacao.classList.remove('show');
            setTimeout(() => {
                if (notificacao.parentNode) {
                    notificacao.remove();
                }
            }, 300);
        }, 3000);
    }
}

export const carrinho = new Carrinho();