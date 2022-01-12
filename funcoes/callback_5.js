// Lista de produtos do carrinho
const carrinho = [
    {nome: 'Caneta', qtn: 10, preco: 7.99},
    {nome: 'Impressora', qtn: 0, preco: 449.70},
    {nome: 'Caderno', qtn: 4, preco: 27.10},
    {nome: 'Lapis', qtn: 3, preco: 5.82},
    {nome: 'Tesoura', qtn: 1, preco: 19.20}
]

// Função para multiplicar a quantidade de cada item com seu respectivo preço
const somaDosItens = item => item.qtn * item.preco;

// Função para somar o preço total dos itens 
const soma = (acc, el) => acc + el; 

// Executando funções e armazenado na variavel
const resulSoma = carrinho
    .map(somaDosItens)
    .reduce(soma);

// Exibindo resultado no console
console.log(resulSoma)
