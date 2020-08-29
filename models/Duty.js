const mongoose = require('mongoose');

const dutySchema = mongoose.Schema({
  userId: {
    type: String,
    required: [true, 'Musisz podać ID użytkownika.'],
  },
  dutyDate: {
    type: String,
    required: [true, 'Musisz podać datę.'],
  },
  dutyType: {
    type: String,
    required: [true, 'Musisz wybrać typ aktywności.'],
    enum: ['dutyOn', 'dutyOff'],
  },
});


const Duty = mongoose.model('duty', dutySchema)
module.exports = Duty