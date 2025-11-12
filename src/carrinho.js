import { produtos } from './store.js';

// REQUISITO: Componentes Dinâmicos manualmente
export class Carrinho {
    constructor() {
        this.itens = JSON.parse(localStorage.getItem('carrinho_jaguaribe')) || [];
        this.init();
    }

    init() {
        this.atualizarBadge();
        this.configurarEventos();
    }

    // REQUISITO: Tratamento de Eventos
    configurarEventos() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-adicionar-carrinho')) {
                const produtoId = parseInt(e.target.dataset.id);
                this.adicionarItem(produtoId);
            }
            
            if (e.target.classList.contains('btn-remover-carrinho')) {
                const produtoId = parseInt(e.target.dataset.id);
                this.removerItem(produtoId);
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
        this.mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
    }

    removerItem(produtoId) {
        this.itens = this.itens.filter(item => item.id !== produtoId);
        this.salvarNoLocalStorage();
        this.atualizarBadge();
        this.atualizarCarrinho(); // Se estiver na página do carrinho
    }

    // REQUISITO: Programação Funcional - Array.reduce()
    calcularTotal() {
        return this.itens.reduce((total, item) => {
            return total + (item.preco * item.quantidade);
        }, 0);
    }

    atualizarBadge() {
        const totalItens = this.itens.reduce((acc, item) => acc + item.quantidade, 0);
        const badge = document.getElementById('carrinho-badge');
        if (badge) {
            badge.textContent = totalItens;
            badge.style.display = totalItens > 0 ? 'flex' : 'none';
        }
    }

    // REQUISITO: Componentes Dinâmicos manualmente
    renderizarCarrinho() {
        if (this.itens.length === 0) {
            return '<p class="carrinho-vazio">Seu carrinho está vazio</p>';
        }

        return `
            <div class="itens-carrinho">
                ${this.itens.map(item => `
                    <div class="item-carrinho">
                        <img src="${item.imagem}" alt="${item.nome}">
                        <div class="info-item">
                            <h4>${item.nome}</h4>
                            <p>R$ ${item.preco.toFixed(2)}</p>
                            <div class="controles-quantidade">
                                <button class="btn-diminuir" data-id="${item.id}">-</button>
                                <span>${item.quantidade}</span>
                                <button class="btn-aumentar" data-id="${item.id}">+</button>
                            </div>
                        </div>
                        <button class="btn-remover-carrinho" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
            <div class="total-carrinho">
                <strong>Total: R$ ${this.calcularTotal().toFixed(2)}</strong>
                <button class="btn-finalizar-compra">Finalizar Compra</button>
            </div>
        `;
    }

    salvarNoLocalStorage() {
        localStorage.setItem('carrinho_jaguaribe', JSON.stringify(this.itens));
    }

    mostrarNotificacao(mensagem) {
        // Implementar notificação toast
        console.log(mensagem); // Placeholder
    }
}

export const carrinho = new Carrinho();