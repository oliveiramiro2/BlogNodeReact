async function connection(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection

    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://nome:senha@localhost:3306/nomeBanco")
    console.log('conectou no banco')
    global.connection = connection
    return connection
}

async function selectPostagens(){
    const conn = await connection()
    return await conn.query('SELECT * FROM postagem;')
}

async function insertPostagens(titulo, conteudo, autor){
    const conn = await connection()
    return await conn.query(`INSERT INTO postagem (titulo_postagem, conteudo_postagem, autor_postagem) VALUES ('${titulo}', '${conteudo}', '${autor}');`)
}

module.exports = {selectPostagens, insertPostagens}