const express = require('express')
const router = express.Router()

const getUrl = require('./getUrl')
const addUrl = require('./addUrl')

router.use('/', getUrl)
router.use('/shortly', addUrl)

module.exports = router;