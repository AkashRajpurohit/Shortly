const express = require('express')
const router = express.Router()

const urlRoutes = require('./url')

router.use('/', urlRoutes)

module.exports = router;