// Function declaration 
function bomDia() {
    console.log('Bom dia!')
}
bomDia()

// Function expression
const boaTarde = function() {
    console.log('Boa tarde!')
}
boaTarde()

function soma(a = 0, b = 0) {
    return a + b;
}

let resultado = soma(3, 4)
console.log(resultado)

resultado = soma(5, 6)
console.log(resultado)

resultado = soma(2, 9)
console.log(resultado)

resultado = soma()
console.log(resultado)