// Módulo para gerenciar produtos e dados
export const produtos = [
    {
        id: 1,
        nome: "Luminária de Mesa",
        preco: 380.00,
        precoOriginal: 450.00,
        categoria: "sala-de-estar",
        imagem: "/imagens/20.png",
        descricao: "Luminária de mesa articulada com design moderno...",
        avaliacao: 3.5
    },
    {
        id: 2, 
        nome: "Relógio de Parede",
        preco: 99.00,
        precoOriginal: 150.00,
        categoria: "sala-de-estar",
        imagem: "/imagens/21.png",
        descricao: "Relógio de parede moderno...",
        avaliacao: 3.5
    },
    {
        id: 3,
        nome: "Vasos Mini",
        preco: 150.00,
        precoOriginal: 200.00,
        categoria: "jardim", 
        imagem: "/imagens/06.png",
        descricao: "Conjunto de vasos mini...",
        avaliacao: 3.5
    },
    {
        id: 4,
        nome: "Quadro Moderno",
        preco: 120.00,
        precoOriginal: 150.00,
        categoria: "sala-de-estar",
        imagem: "/imagens/04.png",
        descricao: "Quadro moderno para decoração...",
        avaliacao: 4.5
    },
    {
        id: 5,
        nome: "Xícara Porcelana",
        preco: 100.00, 
        precoOriginal: 140.00,
        categoria: "cozinha",
        imagem: "/imagens/05.png",
        descricao: "Xícara de porcelana premium...",
        avaliacao: 4.5
    },
    {
        id: 6,
        nome: "Globo de Mesa",
        preco: 135.00,
        precoOriginal: 180.00,
        categoria: "sala-de-estar",
        imagem: "/imagens/07.png",
        descricao: "Globo decorativo para mesa...",
        avaliacao: 4.5
    },
    {
        id: 7,
        nome: "Cômoda premium",
        preco: 1200.00,
        precoOriginal: 1500.00,
        categoria: "quarto",
        imagem: "/imagens/18.png",
        descricao: "Cômoda premium de madeira maciça...",
        avaliacao: 4.8
    },
    {
        id: 8,
        nome: "Abajur de madeira",
        preco: 450.00,
        precoOriginal: 550.00,
        categoria: "sala-de-estar", 
        imagem: "/imagens/14.png",
        descricao: "Abajur de madeira moderno de madeira maciça...",
        avaliacao: 4.6
    },
    {
        id: 9,
        nome: "Conjunto de Lustres",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "/imagens/15.png",
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
    },
    {
        id: 11, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha5.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 12,
        nome: "Tábua decorativa de madeira",
        preco: 90.00,
        precoOriginal: 70.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala1.png",
        descricao: "Tábua decorativa de madeira para mesa de centro...",
        avaliacao: 4.9
    },
    { 
        id: 13,
        nome: "Conjunto de almofadas",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "quarto",
        imagem: "imagens/quarto1.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 14,
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "jardim",
        imagem: "imagens/jardim1.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 15, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha1.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 16,
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha2.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 17, 
        nome: "Conjunto de caixas decorativas",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala2.png",
        descricao: "Conjunto de caixas decorativas de madeira, ferro...",
        avaliacao: 4.9
    },
    { 
        id: 18, 
        nome: "Espelho redondo de madeira",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "quarto",
        imagem: "imagens/quarto2.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 19, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "jardim",
        imagem: "imagens/jardim2.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 20, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha3.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 21, 
        nome: "Conjunto de porta velas",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala3.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 22, 
        nome: "Porta jóias moderno",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "quarto",
        imagem: "imagens/quarto3.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 23, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "jardim",
        imagem: "imagens/jardim3.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 24, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha4.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 25, 
        nome: "Console de madeira",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala4.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 26, 
        nome: "Relógio despertador minimalista",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "quarto",
        imagem: "imagens/quarto4.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 27, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "jardim",
        imagem: "imagens/jardim4.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 28, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha6.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 29, 
        nome: "Mesa de centro redonda",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala5.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 30, 
        nome: "Puffs estofados em veludo",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "quarto",
        imagem: "imagens/quarto5.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 31, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "jardim",
        imagem: "imagens/jardim5.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 32,
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha7.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 33, 
        nome: "Relógio de parede de madeira",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala6.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 34,
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "quarto",
        imagem: "imagens/quarto6.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 35, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "jardim",
        imagem: "imagens/jardim6.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 36, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha8.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
    { 
        id: 37, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala7.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },    { 
        id: 38, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "quarto",
        imagem: "imagens/quarto7.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },    { 
        id: 39, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "jardim",
        imagem: "imagens/jardim7.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },    { 
        id: 40, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha9.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },    { 
        id: 41, 
        nome: "Vaso de cerâmica",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala8.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },    { 
        id: 42, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "quarto",
        imagem: "imagens/quarto8.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },    { 
        id: 43, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "jardim",
        imagem: "imagens/jardim8.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },    { 
        id: 44, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha10.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },    { 
        id: 45, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "quarto",
        imagem: "imagens/quarto9.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },    { 
        id: 46, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "jardim",
        imagem: "imagens/jardim9.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    }, 
   { 
        id: 47, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "quarto",
        imagem: "imagens/quarto10.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
   { 
        id: 48, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "jardim",
        imagem: "imagens/jardim10.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
   { 
        id: 49, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "quarto",
        imagem: "imagens/quarto11.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },
   { 
        id: 50, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "jardim",
        imagem: "imagens/jardim11.png",
        descricao: "Vaso de plantas suspenso no teto...",
        avaliacao: 4.9
    },


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

