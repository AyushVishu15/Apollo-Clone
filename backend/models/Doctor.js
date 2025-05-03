const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  experience: Number,
  location: String,
  fees: Number,
  mode: String,
  languages: [String],
});

module.exports = mongoose.model('Doctor', doctorSchema);