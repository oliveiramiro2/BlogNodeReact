const express = require('express')
const router = express.Router()
const db = require("./../db")

router.get('/postagens', (req, res) => {

    (async () => {
        const todasPostagens = await db.selectPostagens()
        console.log(todasPostagens)
    })()
    
})

router.get('/postagens/nova', (req, res) => {
    
    (async () => {
        const inserirPostagem = await db.insertPostagens(req.query.titulo, req.query.conteudo, req.query.autor)
        console.log(inserirPostagem)
    })()
    
})

module.exports = router