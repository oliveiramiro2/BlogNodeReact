const express = require('express')
const router = express.Router()

router.get('/comentarios/:postid', (req, res) => {
    res.json({
        conteudo: 'gosteira bastante',
        autor: 'ze chule'
    })
})

module.exports = router