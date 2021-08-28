let Produtos = [
    {nome: 'NOTEBOOK', preco: 3000},
    {nome: 'CELULAR', preco: 1250},
    {nome: 'CADEIRA GAMER', preco: 800},
    {nome: 'TECLADO', preco: 120},
    {nome: 'FONES', preco: 50},
]


const valida_produtos = () => {
    let nome_produto = document.getElementById('envia_nome').value
    let preco_produto = document.getElementById('envia_preco').value

    if(nome_produto && preco_produto != '') {
        return [nome_produto.toUpperCase(), preco_produto]
    }else{
        return alert('Erro... tente novamente')
    }
}


const valida_atualização = () => {
    let nome_produto = document.getElementById('envia_nome').value
    let preco_produto = document.getElementById('envia_preco').value
    let atualiza_nome = document.getElementById('atualiza_nome').value
    let atualiza_preco = document.getElementById('atualiza_preco').value

    if(nome_produto && preco_produto && atualiza_nome && atualiza_preco !== ''){
        for(let i in Produtos){        
            if(Produtos[i]['nome'] == nome_produto.toUpperCase() && Produtos[i]['preco'] == preco_produto){
                return [[Produtos[i]['nome'], Produtos[i]['preco'] , i] , [atualiza_nome.toUpperCase(), atualiza_preco]]    
            }        
        }
        return alert('ERRO')
    }else{
        return alert('ERRO')
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
                Produtos.splice(i, 1)
                console.log(Produtos)                                                                                         
            }            
        }
        mostra_produtos(Produtos, 0)             
    }    
}


const atualiza_produtos = (callback) => {
    if(callback){               
        Produtos[callback[0][2]]['nome'] = callback[1][0]
        Produtos[callback[0][2]]['preco'] = callback[1][1]
        mostra_produtos(Produtos, 0)
    }    
}


const muda_display = () => {
    let pega = document.getElementById('atualiza_produtos').style['display']       
    if(pega === 'none'){
        document.getElementById('atualiza_produtos').style.display = 'block'
    }else{
        document.getElementById('atualiza_produtos').style.display = 'none'
    }
}


const mostra_produtos = (produtos, i) => {
    let teste = document.getElementById('tabelaDinamica').innerHTML = ''                                                                  
    for(i ; i < produtos.length; i++){            
        let teste = document.getElementById('tabelaDinamica').innerHTML += `<tr> <td>${i}</td> <td>${produtos[i]['nome']}</td> <td>${produtos[i]['preco']}</td></tr>`        
    }                
}


window.onload = mostra_produtos(Produtos, 0)
