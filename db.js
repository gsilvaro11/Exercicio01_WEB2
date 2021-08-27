const Client = require('pg').Client

const client = new Client({
    user: 'postgres',
    password: '8523',
    host: 'localhost',
    port: 5432,
    database: 'CRUD',       
})


async function getCrud(){
    try{
        await client.connect()
        const resultado = await client.query('select * from Produtos')
        console.log(resultado)        
    }catch{
        console.log('ERRO')
    }
    finally{
        await client.end()
    }
}

getCrud()
