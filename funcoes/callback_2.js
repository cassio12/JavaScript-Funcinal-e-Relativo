const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(erro, conteudo){
    console.log(conteudo.toString())
}
console.log("Inicio")
fs.readFile(caminho, exibirConteudo)
console.log("Fim")
 
console.log("Inicio sync...")
const conteudo = fs.readFileSync(caminho).toString()
console.log(conteudo)
console.log("Fim sync...")