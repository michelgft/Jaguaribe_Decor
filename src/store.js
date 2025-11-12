// Módulo para gerenciar produtos e dados
export const produtos = [
    {
        id: 1,
        nome: "Luminária de Mesa",
        preco: 380.00,
        precoOriginal: 450.00,
        categoria: "sala-de-estar",
        imagem: "public/imagens/20.png",
        descricao: "Luminária de mesa articulada com design moderno...",
        avaliacao: 3.5
    },
    {
        id: 2, 
        nome: "Relógio de Parede",
        preco: 99.00,
        precoOriginal: 150.00,
        categoria: "sala-de-estar",
        imagem: "public/imagens/21.png",
        descricao: "Relógio de parede moderno...",
        avaliacao: 3.5
    },
    {
        id: 3,
        nome: "Vasos Mini",
        preco: 150.00,
        precoOriginal: 200.00,
        categoria: "jardim", 
        imagem: "public/imagens/06.png",
        descricao: "Conjunto de vasos mini...",
        avaliacao: 3.5
    },
    {
        id: 4,
        nome: "Quadro Moderno",
        preco: 120.00,
        precoOriginal: 150.00,
        categoria: "sala-de-estar",
        imagem: "public/imagens/04.png",
        descricao: "Quadro moderno para decoração...",
        avaliacao: 4.5
    },
    {
        id: 5,
        nome: "Xícara Porcelana",
        preco: 100.00, 
        precoOriginal: 140.00,
        categoria: "cozinha",
        imagem: "public/imagens/05.png",
        descricao: "Xícara de porcelana premium...",
        avaliacao: 4.5
    },
    {
        id: 6,
        nome: "Globo de Mesa",
        preco: 135.00,
        precoOriginal: 180.00,
        categoria: "sala-de-estar",
        imagem: "public/imagens/07.png",
        descricao: "Globo decorativo para mesa...",
        avaliacao: 4.5
    },
    {
        id: 7,
        nome: "Cama Casal Premium",
        preco: 1200.00,
        precoOriginal: 1500.00,
        categoria: "quarto",
        imagem: "public/imagens/18.png",
        descricao: "Cama de casal premium com cabeceira estofada...",
        avaliacao: 4.8
    },
    {
        id: 8,
        nome: "Mesa de Centro",
        preco: 450.00,
        precoOriginal: 550.00,
        categoria: "sala-de-estar", 
        imagem: "public/imagens/14.png",
        descricao: "Mesa de centro moderna em madeira maciça...",
        avaliacao: 4.6
    },
    {
        id: 9,
        nome: "Jogo de Panelas",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "public/imagens/15.png",
        descricao: "Jogo completo de panelas antiaderentes...",
        avaliacao: 4.7
    },
    {
        id: 10,
        nome: "Vaso Decorativo Grande",
        preco: 180.00,
        precoOriginal: 220.00,
        categoria: "jardim",
        imagem: "public/imagens/19.png",
        descricao: "Vaso decorativo grande para plantas...",
        avaliacao: 4.4
    }
];


// REQUISITO: Programação Funcional - Array.filter()
export function filtrarPorCategoria(categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
}

// REQUISITO: Programação Funcional - Array.map()  
export function mapearProdutosParaHTML(produtosArray) {
    return produtosArray.map(produto => `
        <div class="produto-card">
            <a href="assets/pages/detalhe.html?id=${produto.id}">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </a>
            <h3>${produto.nome}</h3>
            <p>De R$ ${produto.precoOriginal.toFixed(2)} por R$ ${produto.preco.toFixed(2)}</p>
            <div class="avaliacao">
                ${gerarEstrelas(produto.avaliacao)}
            </div>
            <button class="btn-adicionar-carrinho" data-id="${produto.id}">
                Adicionar ao Carrinho
            </button>
            <a href="assets/pages/detalhe.html?id=${produto.id}" class="btn">Ver detalhes</a>
        </div>
    `).join('');
}

function gerarEstrelas(avaliacao) {
    const estrelasCheias = Math.floor(avaliacao);
    const meiaEstrela = avaliacao % 1 !== 0;
    const estrelasVazias = 5 - Math.ceil(avaliacao);
    
    return '<i class="fas fa-star"></i>'.repeat(estrelasCheias) +
           (meiaEstrela ? '<i class="fas fa-star-half-alt"></i>' : '') +
           '<i class="far fa-star"></i>'.repeat(estrelasVazias);
}

// LocalStorage para dados do cliente
export function salvarDadosCliente(dados) {
    localStorage.setItem('cliente_jaguaribe', JSON.stringify(dados));
}

export function obterDadosCliente() {
    return JSON.parse(localStorage.getItem('cliente_jaguaribe') || '{}');
}

