// Módulo para gerenciar produtos e dados
export const produtos = [
    {
        id: 1,
        nome: "Luminária de Mesa",
        preco: 380.00,
        precoOriginal: 450.00,
        categoria: "sala-de-estar",
        imagem: "imagens/20.png",
        descricao: "Luminária de mesa articulada com design moderno e ajuste de foco, ideal para leitura ou trabalho.",
        avaliacao: 4.1
    },
    {
        id: 2, 
        nome: "Relógio de Parede",
        preco: 99.00,
        precoOriginal: 150.00,
        categoria: "sala-de-estar",
        imagem: "imagens/21.png",
        descricao: "Relógio de parede moderno e silencioso, com acabamento em metal escovado, perfeito para qualquer ambiente.",
        avaliacao: 4.6
    },
    {
        id: 3,
        nome: "Vasos Mini",
        preco: 150.00,
        precoOriginal: 200.00,
        categoria: "jardim", 
        imagem: "imagens/06.png",
        descricao: "Conjunto de 3 vasos mini de cerâmica colorida, ideal para suculentas e pequenos arranjos.",
        avaliacao: 4.2
    },
    {
        id: 4,
        nome: "Quadro Moderno",
        preco: 120.00,
        precoOriginal: 150.00,
        categoria: "sala-de-estar",
        imagem: "imagens/04.png",
        descricao: "Quadro moderno com arte abstrata em tela, para dar um toque de sofisticação e cor à sua parede.",
        avaliacao: 4.6
    },
    {
        id: 5,
        nome: "Xícara Porcelana",
        preco: 100.00, 
        precoOriginal: 140.00,
        categoria: "cozinha",
        imagem: "imagens/05.png",
        descricao: "Xícara de porcelana premium com detalhes em dourado, perfeita para o seu café ou chá da tarde.",
        avaliacao: 4.9
    },
    {
        id: 6,
        nome: "Globo de Mesa",
        preco: 135.00,
        precoOriginal: 180.00,
        categoria: "sala-de-estar",
        imagem: "imagens/07.png",
        descricao: "Globo decorativo de mesa com base de madeira, um item charmoso para escritório ou sala de estar.",
        avaliacao: 4.2
    },
    {
        id: 7,
        nome: "Cômoda premium",
        preco: 1200.00,
        precoOriginal: 1500.00,
        categoria: "quarto",
        imagem: "imagens/18.png",
        descricao: "Cômoda premium de madeira maciça, 4 gavetas com corrediças telescópicas e design escandinavo.",
        avaliacao: 4.8
    },
    {
        id: 8,
        nome: "Abajur de madeira",
        preco: 450.00,
        precoOriginal: 550.00,
        categoria: "sala-de-estar", 
        imagem: "imagens/14.png",
        descricao: "Abajur de madeira moderno de madeira maciça com cúpula de tecido, proporcionando luz suave e aconchegante.",
        avaliacao: 4.6
    },
    {
        id: 9,
        nome: "Conjunto de Lustres",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "imagens/15.png",
        descricao: "Conjunto de 3 lustres pendentes em estilo industrial, ideal para iluminar bancadas e mesas de jantar.",
        avaliacao: 4.7
    },
    {
        id: 10,
        nome: "Vaso Decorativo Grande",
        preco: 180.00,
        precoOriginal: 220.00,
        categoria: "jardim",
        imagem: "imagens/19.png",
        descricao: "Vaso decorativo grande para plantas internas ou externas, com acabamento em cimento texturizado.",
        avaliacao: 4.4
    },
    {
        id: 11, 
        nome: "Vaso de plantas suspenso",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha5.png",
        descricao: "Vaso de plantas suspenso em macramê, perfeito para trazer um toque verde e boho para sua cozinha.",
        avaliacao: 4.9
    },
    { 
        id: 12,
        nome: "Tábua decorativa de madeira",
        preco: 49.90, // Preço adicionado
        precoOriginal: 70.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala1.png",
        descricao: "Tábua decorativa de madeira nobre para mesa de centro, ideal para apoiar velas ou pequenos objetos.",
        avaliacao: 4.5
    },
    { 
        id: 13,
        nome: "Conjunto de almofadas",
        preco: 280.00,
        precoOriginal: 350.00,
        categoria: "quarto",
        imagem: "imagens/quarto1.png",
        descricao: "Conjunto de 4 almofadas coloridas em tecido de linho macio, para decorar a cama ou poltrona.",
        avaliacao: 4.0
    },
    { 
        id: 14,
        nome: "Painéis de treliça",
        preco: 580.00, // Ajuste para ser mais baixo que o original
        precoOriginal: 700.00,
        categoria: "jardim",
        imagem: "imagens/jardim1.png",
        descricao: "Conjunto de painéis de treliça modernos em madeira tratada, perfeitos para plantas trepadeiras ou como divisória.",
        avaliacao: 4.9
    },
    { 
        id: 15, 
        nome: "Conjunto de tábuas de cortar",
        preco: 130.00, // Ajuste para ser mais baixo que o original
        precoOriginal: 180.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha1.png",
        descricao: "Conjunto de 3 tábuas de cortar em bambu e polipropileno, com design moderno e alça para pendurar.",
        avaliacao: 4.1
    },
    { 
        id: 16,
        nome: "Organizador de talheres",
        preco: 89.00, // Ajuste para ser mais baixo que o original
        precoOriginal: 120.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha2.png",
        descricao: "Organizador de talheres de bambu moderno com divisórias ajustáveis, mantendo sua gaveta em ordem.",
        avaliacao: 4.4
    },
    { 
        id: 17, 
        nome: "Conjunto de caixas decorativas",
        preco: 59.90, // Ajuste para ser mais baixo que o original
        precoOriginal: 80.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala2.png",
        descricao: "Conjunto de 3 caixas decorativas de madeira, ferro e tecido, ideais para guardar pequenos objetos com estilo.",
        avaliacao: 3.5
    },
    { 
        id: 18, 
        nome: "Espelho redondo de madeira",
        preco: 120.00, // Ajuste para ser mais baixo que o original
        precoOriginal: 150.00,
        categoria: "quarto",
        imagem: "imagens/quarto2.png",
        descricao: "Espelho redondo com moldura em madeira clara, ideal para penteadeiras ou paredes de destaque.",
        avaliacao: 4.7
    },
    { 
        id: 19, 
        nome: "Luzes de estacas solares",
        preco: 290.00, // Ajuste para ser mais baixo que o original
        precoOriginal: 340.00,
        categoria: "jardim",
        imagem: "imagens/jardim2.png",
        descricao: "Conjunto de 6 luzes de estacas solares em LED, perfeitas para iluminar caminhos e jardins de forma sustentável.",
        avaliacao: 4.4
    },
    { 
        id: 20, 
        nome: "Estante flutuante de madeira",
        preco: 75.00, // Ajuste para ser mais baixo que o original
        precoOriginal: 90.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha3.png",
        descricao: "Estante flutuante de madeira minimalista, ideal para organizar temperos ou exibir itens decorativos na cozinha.",
        avaliacao: 3.9
    },
    { 
        id: 21, 
        nome: "Conjunto de porta velas",
        preco: 99.00, // Ajuste para ser mais baixo que o original
        precoOriginal: 130.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala3.png",
        descricao: "Conjunto de 4 porta velas modernos em metal e vidro, criando um ambiente acolhedor e elegante.",
        avaliacao: 4.2
    },
    { 
        id: 22, 
        nome: "Porta jóias moderno",
        preco: 169.00, // Ajuste para ser mais baixo que o original
        precoOriginal: 200.00,
        categoria: "quarto",
        imagem: "imagens/quarto3.png",
        descricao: "Porta jóias moderno com design minimalista em acrílico e metal, mantendo suas joias organizadas.",
        avaliacao: 4.8
    },
    { 
        id: 23, 
        nome: "Esferas de Metal",
        preco: 109.00, // Ajuste para ser mais baixo que o original
        precoOriginal: 140.00,
        categoria: "jardim",
        imagem: "imagens/jardim3.png",
        descricao: "Conjunto de 3 esferas de metal decorativas em tamanhos variados, para um toque de arte moderna no jardim.",
        avaliacao: 4.3
    },
    { 
        id: 24, 
        nome: "Conjunto de recipientes para temperos",
        preco: 65.00, // Ajuste para ser mais baixo que o original
        precoOriginal: 80.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha4.png",
        descricao: "Conjunto de 6 recipientes coloridos de vidro para temperos, com vedação hermética para preservar o sabor.",
        avaliacao: 4.1
    },
    { 
        id: 25, 
        nome: "Console de madeira",
        preco: 299.00, // Ajuste para ser mais baixo que o original
        precoOriginal: 350.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala4.png",
        descricao: "Console de madeira decorativo com gaveta, ideal para hall de entrada ou como apoio na sala de estar.",
        avaliacao: 4.2
    },
    { 
        id: 26, 
        nome: "Relógio despertador minimalista",
        preco: 79.90,
        precoOriginal: 100.00,
        categoria: "quarto",
        imagem: "imagens/quarto4.png",
        descricao: "Relógio despertador digital com design minimalista, luz noturna suave e carregamento USB.",
        avaliacao: 4.9
    },
    { 
        id: 27, 
        nome: "Vaso de plantas suspenso",
        preco: 199.00,
        precoOriginal: 250.00,
        categoria: "jardim",
        imagem: "imagens/jardim4.png",
        descricao: "Vaso de plantas suspenso em cerâmica branca e corda de sisal, perfeito para varandas e jardins verticais.",
        avaliacao: 4.5
    },
    { 
        id: 28, 
        nome: "Vaso de plantas suspenso",
        preco: 180.00,
        precoOriginal: 220.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha6.png",
        descricao: "Vaso de plantas suspenso de metal com acabamento preto fosco, um toque moderno para a sua cozinha.",
        avaliacao: 4.0
    },
    { 
        id: 29, 
        nome: "Mesa de centro redonda",
        preco: 399.00,
        precoOriginal: 480.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala5.png",
        descricao: "Mesa de centro redonda com tampo de madeira e pés de metal, combinando elegância e funcionalidade.",
        avaliacao: 4.7
    },
    { 
        id: 30, 
        nome: "Puffs estofados em veludo",
        preco: 250.00,
        precoOriginal: 320.00,
        categoria: "quarto",
        imagem: "imagens/quarto5.png",
        descricao: "Conjunto de 2 puffs estofados em veludo macio, adicionando conforto e um toque luxuoso ao quarto.",
        avaliacao: 4.6
    },
    { 
        id: 31, 
        nome: "Conjunto de Caixas de Plantio",
        preco: 230.00,
        precoOriginal: 290.00,
        categoria: "jardim",
        imagem: "imagens/jardim5.png",
        descricao: "Conjunto de 3 caixas de plantio elevadas em madeira, ideais para hortas urbanas em pequenos espaços.",
        avaliacao: 4.4
    },
    { 
        id: 32,
        nome: "Recipientes minimalistas",
        preco: 85.00,
        precoOriginal: 110.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha7.png",
        descricao: "Conjunto de 4 recipientes herméticos minimalistas em cerâmica com tampa de madeira, para mantimentos.",
        avaliacao: 4.1
    },
    { 
        id: 33, 
        nome: "Relógio de parede de madeira",
        preco: 140.00,
        precoOriginal: 180.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala6.png",
        descricao: "Relógio de parede de madeira maciça com design vazado, um item decorativo sofisticado para a sala.",
        avaliacao: 4.8
    },
    { 
        id: 34,
        nome: "Pequena estante flutuante",
        preco: 95.00,
        precoOriginal: 120.00,
        categoria: "quarto",
        imagem: "imagens/quarto6.png",
        descricao: "Pequena estante flutuante com suporte invisível, perfeita para livros e pequenos itens decorativos no quarto.",
        avaliacao: 4.2
    },
    { 
        id: 35, 
        nome: "Vaso de plantas suspenso",
        preco: 210.00,
        precoOriginal: 260.00,
        categoria: "jardim",
        imagem: "imagens/jardim6.png",
        descricao: "Vaso de plantas suspenso em ferro forjado com detalhes em vidro, ideal para um toque vintage no jardim.",
        avaliacao: 4.0
    },
    { 
        id: 36, 
        nome: "Cesto de frutas de metal", // Nome corrigido
        preco: 69.90, // Preço adicionado
        precoOriginal: 90.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha8.png",
        descricao: "Cesto de frutas de metal em formato aramado, moderno e espaçoso, para manter as frutas frescas.",
        avaliacao: 3.8
    },
    { 
        id: 37, 
        nome: "Luminária de chão",
        preco: 390.00,
        precoOriginal: 490.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala7.png",
        descricao: "Luminária de chão com design minimalista e base de mármore, proporcionando luz ambiente elegante.",
        avaliacao: 4.7
    },    { 
        id: 38, 
        nome: "Difusor de aromas",
        preco: 120.00,
        precoOriginal: 160.00,
        categoria: "quarto",
        imagem: "imagens/quarto7.png",
        descricao: "Difusor de aromas ultrassônico com luz LED e timer, para um ambiente relaxante e perfumado.",
        avaliacao: 4.5
    },    { 
        id: 39, 
        nome: "Conjunto de jarros de cerâmica",
        preco: 220.00,
        precoOriginal: 280.00,
        categoria: "jardim",
        imagem: "imagens/jardim7.png",
        descricao: "Conjunto de 3 jarros de cerâmica artesanais para decoração de jardim ou armazenamento de água de rega.",
        avaliacao: 4.1
    },    { 
        id: 40, 
        nome: "Fruteira moderna de cerâmica branca",
        preco: 110.00,
        precoOriginal: 140.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha9.png",
        descricao: "Fruteira moderna de cerâmica branca com design geométrico, peça central elegante para a mesa.",
        avaliacao: 4.3
    },    { 
        id: 41, 
        nome: "Vaso de cerâmica",
        preco: 130.00,
        precoOriginal: 160.00,
        categoria: "sala-de-estar",
        imagem: "imagens/sala8.png",
        descricao: "Vaso de cerâmica com textura rústica, ideal para plantas de grande porte ou como peça decorativa no chão.",
        avaliacao: 4.6
    },    { 
        id: 42, 
        nome: "Relógio de mesa escandinavo",
        preco: 89.00,
        precoOriginal: 120.00,
        categoria: "quarto",
        imagem: "imagens/quarto8.png",
        descricao: "Relógio de mesa escandinavo de madeira clara, com ponteiros minimalistas e mecanismo silencioso.",
        avaliacao: 4.9
    },    { 
        id: 43, 
        nome: "Bebedouro de Pássaros de Cerâmica",
        preco: 150.00,
        precoOriginal: 190.00,
        categoria: "jardim",
        imagem: "imagens/jardim8.png",
        descricao: "Bebedouro de pássaros de cerâmica vitrificada, com design que atrai aves e decora o jardim.",
        avaliacao: 4.5
    },    { 
        id: 44, 
        nome: "Conjunto de recipientes de vidro",
        preco: 140.00,
        precoOriginal: 180.00,
        categoria: "cozinha",
        imagem: "imagens/cozinha10.png",
        descricao: "Conjunto de 5 recipientes de vidro com tampa de bambu e vedação de silicone, para organização da despensa.",
        avaliacao: 4.9
    },    { 
        id: 45, 
        nome: "Espelho de mesa dourado",
        preco: 69.90,
        precoOriginal: 90.00,
        categoria: "quarto",
        imagem: "imagens/quarto9.png",
        descricao: "Pequeno espelho de mesa com moldura dourada e base ajustável, ideal para maquiagem ou decoração.",
        avaliacao: 4.6
    },    { 
        id: 46, 
        nome: "Vaso de plantas suspenso",
        preco: 170.00,
        precoOriginal: 210.00,
        categoria: "jardim",
        imagem: "imagens/jardim9.png",
        descricao: "Vaso de plantas suspenso em formato de cesta de vime, ideal para plantas pendentes em áreas cobertas.",
        avaliacao: 4.3
    }, 
   { 
        id: 47, 
        nome: "Vasos de plantas geométricos",
        preco: 110.00,
        precoOriginal: 150.00,
        categoria: "quarto",
        imagem: "imagens/quarto10.png",
        descricao: "Conjunto de 3 vasos de plantas com design geométrico em cimento, para mesas de cabeceira ou estantes.",
        avaliacao: 4.7
    },
   { 
        id: 48, 
        nome: "Banco de madeira de jardim",
        preco: 450.00,
        precoOriginal: 550.00,
        categoria: "jardim",
        imagem: "imagens/jardim10.png",
        descricao: "Banco de madeira tratada com encosto, resistente às intempéries, perfeito para o seu jardim ou varanda.",
        avaliacao: 4.8
    },
   { 
        id: 49, 
        nome: "Abajur de cerâmica",
        preco: 190.00,
        precoOriginal: 240.00,
        categoria: "quarto",
        imagem: "imagens/quarto11.png",
        descricao: "Abajur de cerâmica com base texturizada e cúpula de linho, para uma iluminação suave no quarto.",
        avaliacao: 4.5
    },
   { 
        id: 50, 
        nome: "Fonte de água decorativa",
        preco: 320.00,
        precoOriginal: 400.00,
        categoria: "jardim",
        imagem: "imagens/jardim11.png",
        descricao: "Fonte de água decorativa de mesa com luzes LED e som relaxante de água corrente.",
        avaliacao: 4.7
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
            <a href="/detalhe.html?id=${produto.id}">
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
            <a href="<a href="/detalhe.html?id=${produto.id}">" class="btn">Ver detalhes</a>
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

