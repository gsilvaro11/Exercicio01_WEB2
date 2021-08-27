let Produtos = [
    {nome: 'Notebook', preco: 3000},
    {nome: 'Celular', preco: 1250},
    {nome: 'Cadeira Gamer', preco: 800},
    {nome: 'Teclado', preco: 120},
    {nome: 'Fones', preco: 50},
]

//Pega os valores do front e valida e passa para as funções
const valida_produtos = () => {
    let nome_produto = document.getElementById('envia_nome').value
    let preco_produto = document.getElementById('envia_preco').value

    if(nome_produto && preco_produto != '') {
        return [nome_produto, preco_produto]
    }else{
        return alert('Erro... tente novamente')
    }
}


const adiciona_produtos = (callback) => { 
    if(callback){ 
        console.log(callback)       
        let request = {nome: callback[0], preco: callback[1]}
        Produtos.push(request)
        mostra_produtos(Produtos)   
    }    
}


let i = 0
const mostra_produtos = produtos => {                                                                              
    for(i ; i < produtos.length; i++){        
        let teste = document.getElementById('tabelaDinamica').innerHTML += `<tr> <td>${i}</td> <td>${produtos[i]['nome']}</td> <td>${produtos[i]['preco']}</td></tr>`        
    }                
}

mostra_produtos(Produtos)
