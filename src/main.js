import './style.css';
import { carrinho } from './carrinho.js';
import { produtos, filtrarPorCategoria, mapearProdutosParaHTML } from './store.js';

console.log('Jaguaribe Decor - Projeto PW2 - SPA');

// Estado da aplicação
let categoriaAtual = 'todos';

// Inicializar carrinho
carrinho;

// REQUISITO: Single Page Application - Gestão de estado e filtros
function renderizarProdutos(categoria = 'todos') {
    const produtosLista = document.getElementById('produtos-lista');
    const produtosTitulo = document.getElementById('produtos-titulo');
    const btnVoltar = document.querySelector('.btn-voltar');
    
    if (!produtosLista) return;
    
    let produtosFiltrados;
    let titulo = 'Nossos Produtos';
    
    if (categoria === 'todos') {
        produtosFiltrados = produtos;
        btnVoltar.style.display = 'none';
    } else {
        produtosFiltrados = filtrarPorCategoria(categoria);
        const categoriaFormatada = categoria
            .split('-')
            .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
            .join(' ');
        titulo = `Produtos para ${categoriaFormatada}`;
        btnVoltar.style.display = 'inline-block';
    }
    
    // Animação de saída
    produtosLista.style.opacity = '0';
    produtosLista.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        produtosTitulo.textContent = titulo;
        produtosLista.innerHTML = mapearProdutosParaHTML(produtosFiltrados);
        
        // Animação de entrada
        produtosLista.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        produtosLista.style.opacity = '1';
        produtosLista.style.transform = 'translateY(0)';
    }, 300);
    
    categoriaAtual = categoria;
    atualizarBotoesFiltro(categoria);
}

// Atualizar estado visual dos botões de filtro
function atualizarBotoesFiltro(categoriaAtiva) {
    document.querySelectorAll('.btn-filtro').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filtro === categoriaAtiva) {
            btn.classList.add('active');
        }
    });
}

// Scroll suave para seção de produtos
function scrollParaProdutos() {
    const secaoProdutos = document.getElementById('produtos');
    if (secaoProdutos) {
        secaoProdutos.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// REQUISITO: Tratamento de Eventos - Event Delegation para SPA
document.addEventListener('DOMContentLoaded', function() {
    adicionarBadgeCarrinho();
    renderizarProdutos('todos'); // Renderização inicial
    
    // Event delegation para cards de categoria
    document.addEventListener('click', function(e) {
        const categoriaCard = e.target.closest('.categoria-card');
        if (categoriaCard) {
            e.preventDefault();
            const categoria = categoriaCard.dataset.categoria;
            renderizarProdutos(categoria);
            scrollParaProdutos();
        }
        
        // Botões de filtro
        const btnFiltro = e.target.closest('.btn-filtro:not(.btn-voltar)');
        if (btnFiltro) {
            const filtro = btnFiltro.dataset.filtro;
            renderizarProdutos(filtro);
        }
        
        // Botão voltar
        if (e.target.closest('.btn-voltar')) {
            renderizarProdutos('todos');
        }
        
        // Adicionar ao carrinho
        if (e.target.classList.contains('btn-adicionar-carrinho')) {
            const produtoId = parseInt(e.target.dataset.id);
            carrinho.adicionarItem(produtoId);
        }
    });
});

// Adicionar badge do carrinho no header
function adicionarBadgeCarrinho() {
    const nav = document.querySelector('nav');
    if (nav) {
        const badge = document.createElement('div');
        badge.id = 'carrinho-badge';
        badge.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #1d9d74;
            color: white;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
        `;
        nav.style.position = 'relative';
        nav.appendChild(badge);
        
        carrinho.atualizarBadge();
    }
}

// REQUISITO: Programação Funcional - Exemplo adicional com reduce()
export function calcularDescontoTotal(produtos) {
    return produtos.reduce((total, produto) => {
        return total + (produto.precoOriginal - produto.preco);
    }, 0);
}

// Exportar função para uso em outros módulos
export { renderizarProdutos };
