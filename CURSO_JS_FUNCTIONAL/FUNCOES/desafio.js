const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, frágil: true},
    { nome: 'Impressora', qtde: 1, preco: 649.50, frágil: true},
    { nome: 'Caderno', qtde: 4, preco: 27.10, frágil: false},
    { nome: 'Lapis', qtde: 3, preco: 5.82, frágil: false},
    { nome: 'Tesoura', qtde: 1, preco: 19.20, frágil: true},
]

// filter, map, reduce

// 1. fragil: true
// 2. qtde * preco -> total
// 3. media totais

const fragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.Total + el
    return {
            qtde: novaQtde,
            total: novoTotal,
            media: novoTotal / novaQtde
        }
}

const mediaInicial = {qtde: 0, total: 0, media: 0}

const media = carrinho
    .filter(fragil)
    .map(getTotal)
    .reduce(getMedia, mediaInicial)
    .media

    console.log('A média é $(media)!')
