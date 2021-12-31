// Appel des modules
const express = require('express')
const morgan = require('morgan')

// Variables d'environnement
const host = process.env.API_HOST || '0.0.0.0'
const port = process.env.API_PORT || 3000

// Initialisation d'Express
const app = express()

// Activation du log des routes
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))

// Route d'accueil
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

// Routes non définies = 404
app.all('/*', (req, res) => {
  res.status(404).json({ message: 'page not found' })
})

// Démarrage du serveur
app.listen(port, host, () => {
  console.log(
    `Running on http://${host}:${port} - Environnement : ${process.env.NODE_ENV}`
  )
})

const db = require('./config/db.config')
db.connect()