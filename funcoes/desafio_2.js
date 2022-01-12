// Lista de produtos do carrinho
const carrinho = [
    {nome: 'Caneta', qtn: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtn: 1, preco: 449.70, fragil: true},
    {nome: 'Caderno', qtn: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtn: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtn: 1, preco: 19.20, fragil: true},
]

// 1. retornar elementos que são fragil: true
const elFragil = item => item.fragil;
const resuFilter = carrinho.filter(elFragil);
console.log(resuFilter);

// 2. retornar qtn e preco total dos elementos
const somaEl = item => item.qtn * item.preco;
const somaTotalItens = carrinho.map(somaEl);
console.log(somaTotalItens);

// 3. media total 
const somaElTotal = item => item.qtn * item.preco;
const mediaItens = (acc, el) => {
    const qtnAtualizada = acc.qtn + 1
    const totalAtualizado = acc.total + el;
    return {
        qtn: qtnAtualizada,
        total: totalAtualizado,
        media: qtnAtualizada / totalAtualizado
    }
}

const mediaTotalItensMap = carrinho
    .map(somaElTotal)
    .reduce(mediaItens, {qtn: 0, total: 0, media: 0});
console.log(mediaTotalItensMap);