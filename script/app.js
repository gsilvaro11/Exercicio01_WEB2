let Produtos = [
    {nome: 'Notebook', preco: 3000},
    {nome: 'Celular', preco: 1250},
    {nome: 'Cadeira Gamer', preco: 800},
    {nome: 'Teclado', preco: 120},
    {nome: 'Fones', preco: 50},
]

const adiciona_produtos = () => { 
    let nome_produto = document.getElementById('envia_nome').value
    let preco_produto = document.getElementById('envia_preco').value

    if(nome_produto && preco_produto != ''){
        let request = {nome: nome_produto, preco: preco_produto}
        Produtos.push(request)
        mostra_produtos(Produtos)               
    }

}

const mostra_produtos = produtos => {      
    for(let i = 0; i < produtos.length; i++){
        let teste = document.getElementById('tabelaDinamica').innerHTML += `<tr> <td>${i}</td> <td>${produtos[i]['nome']}</td> <td>${produtos[i]['preco']}</td></tr>`
    }         
}

mostra_produtos(Produtos)
