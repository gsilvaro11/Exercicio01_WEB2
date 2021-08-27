let Produtos = [
    {nome: 'NOTEBOOK', preco: 3000},
    {nome: 'CELULAR', preco: 1250},
    {nome: 'CADEIRA GAMER', preco: 800},
    {nome: 'TECLADO', preco: 120},
    {nome: 'FONES', preco: 50},
]


//Pega os valores do front e valida e passa para as funções
const valida_produtos = () => {
    let nome_produto = document.getElementById('envia_nome').value
    let preco_produto = document.getElementById('envia_preco').value

    if(nome_produto && preco_produto != '') {
        return [nome_produto.toUpperCase(), preco_produto]
    }else{
        return alert('Erro... tente novamente')
    }
}

const adiciona_produtos = (callback) => { 
    if(callback){               
        let request = {nome: callback[0], preco: callback[1]}
        Produtos.push(request)
        mostra_produtos(Produtos, 0)   
    }    
}

const remove_produtos = (callback) => {    
    if(callback){        
        for(let i in Produtos){            
            if(Produtos[i]['nome'] === callback[0] && Produtos[i]['preco'] == callback[1]){                
                delete Produtos[i]
                console.log(Produtos)                                                                                         
            }            
        }
        mostra_produtos(Produtos, 0)             
    }    
}

//let i = 0
const mostra_produtos = (produtos, i) => {
    let teste = document.getElementById('tabelaDinamica').innerHTML = ''                                                                  
    for(i ; i < produtos.length; i++){
        console.log(i)        
        let teste = document.getElementById('tabelaDinamica').innerHTML += `<tr> <td>${i}</td> <td>${produtos[i]['nome']}</td> <td>${produtos[i]['preco']}</td></tr>`        
    }                
}

window.onload = mostra_produtos(Produtos, 0)
