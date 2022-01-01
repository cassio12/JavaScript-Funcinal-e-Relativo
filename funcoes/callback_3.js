const numeros = [2, 3, 6, 3, 4];
const dobro = n => n * 2;
console.log(numeros.map(dobro));


const nomes = ['Ana', 'Maria', 'Jorge', 'Gilherme', 'Clara'];
const primeiraLetra = txt => txt[0];
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras);


// -------- mine desafio -----------
const carrinho = [
    {nome: 'Caneta', qtn: 10, preco: 7.99},
    {nome: 'Impressora', qtn: 0, preco: 449.70},
    {nome: 'Caderno', qtn: 4, preco: 27.10},
    {nome: 'Lapis', qtn: 3, preco: 5.82},
    {nome: 'Tesoura', qtn: 1, preco: 19.20}
]

// Gerar um array só com os nomes 
// const nomes = item => item.nome
// console.log(carrinho.map(nomes))

// Gerar um array somando o preço com a quantidade 
// const valorCompra = item => item.qtn * item.preco
// console.log(carrinho.map(valorCompra))


// Criando meu MAP 
Array.prototype.meuMap = function(fn) {
    const novoArrya = [];
    for(let i = 0; i < this.length; i++){
        novoArrya.push(fn(this[i], i, this))
    }
    return novoArrya;
}

const nomes = item => item.nome;
console.log(carrinho.meuMap(nomes))

const valorCompra = item => item.qtn * item.preco
console.log(carrinho.meuMap(valorCompra))