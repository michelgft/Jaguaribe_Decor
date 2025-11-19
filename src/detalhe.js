import { produtos } from './store.js';
import { carrinho } from './carrinho.js';

// REQUISITO: Tratamento de Eventos
document.addEventListener('DOMContentLoaded', function() {
    carregarDetalhesProduto();
    configurarEventosDetalhes();
});

function carregarDetalhesProduto() {
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = parseInt(urlParams.get('id'));
    
    if (produtoId) {
        const produto = produtos.find(p => p.id === produtoId);
        
        if (produto) {
            // Atualizar a página com os detalhes do produto
            document.title = `${produto.nome} - Jaguaribe Decor`;
            
            const container = document.querySelector('.detalhe-produto');
            if (container) {
                container.innerHTML = `
                    <div class="detalhe-img1">
                        <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-96 object-cover rounded-lg shadow-md">
                    </div>
                    <div class="detalhe-desc space-y-4">
                        <h2 class="text-3xl font-bold text-gray-800">${produto.nome}</h2>
                        <div class="flex items-center gap-4">
                            <span class="text-2xl font-bold text-green-600">R$ ${produto.preco.toFixed(2)}</span>
                            <span class="text-lg text-gray-500 line-through">R$ ${produto.precoOriginal.toFixed(2)}</span>
                        </div>
                        <div class="avaliacao text-yellow-400 text-lg">
                            ${gerarEstrelas(produto.avaliacao)}
                            <span class="text-gray-600 text-sm ml-2">(${produto.avaliacao})</span>
                        </div>
                        <p class="text-gray-700 leading-relaxed">${produto.descricao}</p>
                        <button class="btn-adicionar-carrinho bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold" data-id="${produto.id}">
                            🛒 Adicionar ao Carrinho
                        </button>
                    </div>
                `;
            }
            
            // Carregar produtos relacionados
            carregarProdutosRelacionados(produto);
        } else {
            // Produto não encontrado
            document.querySelector('.detalhe-produto').innerHTML = `
                <div class="col-span-2 text-center py-16">
                    <h2 class="text-2xl font-bold text-gray-600 mb-4">Produto não encontrado</h2>
                    <a href="index.html" class="text-green-600 hover:text-green-700">Voltar para a página inicial</a>
                </div>
            `;
        }
    }
}

// REQUISITO: Programação Funcional - Array.filter() e Array.map()
function carregarProdutosRelacionados(produtoAtual) {
    const relacionados = produtos
        .filter(p => p.categoria === produtoAtual.categoria && p.id !== produtoAtual.id)
        .slice(0, 4);

    const container = document.querySelector('.detalhe-mais');
    if (container && relacionados.length > 0) {
        container.innerHTML = relacionados.map(prod => `
            <div class="text-center group cursor-pointer" onclick="window.location.href='detalhe.html?id=${prod.id}'">
                <img src="${prod.imagem}" alt="${prod.nome}" class="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform">
                <h3 class="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">${prod.nome}</h3>
                <p class="text-green-600 font-bold mt-1">R$ ${prod.preco.toFixed(2)}</p>
                <div class="avaliacao text-yellow-400 text-sm mt-1">
                    ${gerarEstrelas(prod.avaliacao)}
                </div>
            </div>
        `).join('');
    } else if (container) {
        container.innerHTML = '<p class="col-span-4 text-center text-gray-500">Nenhum produto relacionado encontrado</p>';
    }
}

function configurarEventosDetalhes() {
    // Event delegation para adicionar ao carrinho
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-adicionar-carrinho')) {
            const produtoId = parseInt(e.target.dataset.id);
            carrinho.adicionarItem(produtoId);
        }
    });
}

function gerarEstrelas(avaliacao) {
    const estrelasCheias = Math.floor(avaliacao);
    const meiaEstrela = avaliacao % 1 !== 0;
    const estrelasVazias = 5 - Math.ceil(avaliacao);
    
    return '★'.repeat(estrelasCheias) +
           (meiaEstrela ? '½' : '') +
           '☆'.repeat(estrelasVazias);
}