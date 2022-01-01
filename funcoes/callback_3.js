const numeros = [2, 3, 6, 3, 4];
const dobro = n => n * 2;
console.log(numeros.map(dobro));


const nomes = ['Ana', 'Maria', 'Jorge', 'Gilherme', 'Clara'];
const primeiraLetra = txt => txt[0];
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras);