// uma função 'somar' que resebe (3)(4)(5)
function soma(n1) {
    return function(n2) {
        return function(n3){
            return n1 + n2 + n3
        }
    }
}

const somarN1N2 = soma(3)(4)
console.log(somarN1N2(5))

// uma função 'calcular' que resebe (3)(7)(fn), o parametro que resebe a função 
// deve fazer um calculo com os outros numeros 

function multiplicar(n1, n2) {
    return n1 * n2
}

function calcular(n1) {
    return function(n2) {
        return function(fn) {
            return fn(n1, n2)
        }
    }
}

const calcN1N2 = calcular(10)(2)
console.log(calcN1N2(multiplicar))