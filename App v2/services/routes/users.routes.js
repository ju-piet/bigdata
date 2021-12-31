// Appel des modules
const express = require('express')
const router = express.Router()
const User = require('../controllers/users.ctrl')
const m = require('../helpers/middlewares')

/* Ici les futures routes */
router.post('/', m.checkContent, User.saveOne)

module.exports = router