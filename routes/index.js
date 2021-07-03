const express = require('express')
const router = express.Router()

/*## Aqui chamamos os arquivos contidos na pasta routes ##*/
router.use('/', require('./post'))
router.use('/', require('./comment'))

module.exports = router