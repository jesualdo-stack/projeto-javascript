const fs = require('fs')
const path = require('path')

const caminho = path.join(_dirname, 'dados.txt')

function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}

console.log('Inicio...')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (-, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')

console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.logo(conteudo.toString())
console.log('Fim Sync...')