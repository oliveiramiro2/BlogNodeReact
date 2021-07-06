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
        const inserirPostagem = await db.insertPostagens(
                {titulo: req.query.titulo, conteudo: req.query.conteudo, autor: req.query.autor}
            )
        console.log(inserirPostagem)
    })()
    
})

module.exports = router