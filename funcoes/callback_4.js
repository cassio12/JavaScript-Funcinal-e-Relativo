// Lista de produtos do carrinho
const carrinho = [
    {nome: 'Caneta', qtn: 10, preco: 7.99},
    {nome: 'Impressora', qtn: 0, preco: 449.70},
    {nome: 'Caderno', qtn: 4, preco: 27.10},
    {nome: 'Lapis', qtn: 3, preco: 5.82},
    {nome: 'Tesoura', qtn: 1, preco: 19.20}
]

// Função pra verificar os itens maiores que zero
const maiorQZero = item => item.qtn > 0; 

// Função pra retornar os nomes dos itens
const trazNome = item => item.nome;

// Armazenando nomes dos itens com 'qtn' maiores que zero 
const itensConprados = carrinho.filter(maiorQZero).map(trazNome);

// Exibindo o itens no console
console.log(itensConprados);

// --------- Criando meu Filter ---------

// Iniciando função filter com 'Array.prototype' 
Array.prototype.meuFilter = function(fn){
    // Declarando novo array que recebera os elementos filtrados
    const newArray = [];

    // Laço for que ira percorrer cada item do array 
    for(let i = 0; i < this.length; i++){
        // Condição if que irar verificar os itens do array
        if(fn(this[i], i, this)){
            // Incerindo itens aceitos pelo if no novo array
            newArray.push(this[i])
        }
    }

    // Retornando novo array com os itens filtrados
    return newArray;
}
