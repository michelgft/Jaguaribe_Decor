import './style.css';
import { carrinho } from './carrinho.js';

// REQUISITO: Módulos JavaScript (ESM)
console.log('Jaguaribe Decor - Projeto PW2');

// Inicializar carrinho
carrinho;

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
            width: 20px;
            height: 20px;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        `;
        nav.style.position = 'relative';
        nav.appendChild(badge);
        
        carrinho.atualizarBadge();
    }
}

// REQUISITO: Tratamento de Eventos - Load da página
document.addEventListener('DOMContentLoaded', function() {
    adicionarBadgeCarrinho();
    
    // Adicionar event listeners para produtos
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-adicionar-carrinho')) {
            const produtoId = parseInt(e.target.dataset.id);
            carrinho.adicionarItem(produtoId);
        }
    });
});

// REQUISITO: Programação Funcional - Exemplo adicional com reduce()
export function calcularDescontoTotal(produtos) {
    return produtos.reduce((total, produto) => {
        return total + (produto.precoOriginal - produto.preco);
    }, 0);
}