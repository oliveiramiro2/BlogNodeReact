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
    const [rows] = await conn.query('SELECT * FROM postagem;')
    return rows
}

async function insertPostagens(data){
    const conn = await connection()
    const sql = 'INSERT INTO postagem (titulo_postagem, conteudo_postagem, autor_postagem) VALUES (?, ?, ?);'
    const values = [data.titulo, data.conteudo, data.autor]
    return await conn.query(sql, values)
}

module.exports = {selectPostagens, insertPostagens}