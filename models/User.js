const mongoose = require('mongoose')
const { isEmail } = require('validator');
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Muszisz podać nazwę uzytkownika.'],
    minlength: [2, 'Nazwa uzytkownika musi składać się co najmniej z 2 znaków.'],
    trim: true
  },
  email: {
    type: String,
    // required: [true, "Musisz podać email."],
    // lowercase: true,
    // validate: [isEmail, "Wprowadzono niepoprawny email."]
  },
  password: {
    type: String,
    required: [true, 'Musisz podać hasło.'],
    // regex: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Hasło musi zawierać co najmiej 8 znaków, w tym co najmniej jedną literę, jedna cyfrę oraz jeden znak specjalny.']
  }
})

userSchema.pre('save',async function (next) {
  const salt = bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

const User = mongoose.model('user', userSchema)
module.exports = User