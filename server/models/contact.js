const mongoose = require('mongoose');

const { Schema } = mongoose;
const contactSchema = new Schema({
  nome: String,
  email: String,
  telefone: Number,
  empresa: String,
  cargo: String,
});

module.exports = mongoose.model('contact', contactSchema, 'contacts');
