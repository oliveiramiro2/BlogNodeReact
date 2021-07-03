const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) => {
    res.json({
        titulo: 'Meu primeiro post',
        conteudo: 'Primeira publicação',
        autor: 'Ramiro Mares de Oliveira'
    })
})

module.exports = router