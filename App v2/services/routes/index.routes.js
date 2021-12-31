// Appel des modules
const express = require('express')
const router = express.Router()

// Endpoint des utilisateurs
router.use('/api/v1/users', require('./users.routes'))

module.exports = router