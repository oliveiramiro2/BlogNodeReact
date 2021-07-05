const express = require('express')
const router = express.Router()
const db = require("./../db")
const { conn } = require('./../db')



router.get('/postagens', (req, res) => {

    conn.query('SELECT * FROM postagem', (err, data) => {
        if(err){
            console.log(err)
        }else{
            res.send(data)
        }
    })

    conn.close(() => {
        console.log('banco fechado')
    })
})

module.exports = router