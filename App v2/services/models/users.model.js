// Appel des modules
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    nom: {
      type: String,
      required: true
    },
    prenom: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('users', userSchema)

module.exports = {
  User
}