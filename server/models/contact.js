const mongoose = require('mongoose');

const { Schema } = mongoose;

const contactSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  name: { type: String, required: true },
  email: String,
  phone: { type: Number, required: true },
  company: String,
  job: String,
});

module.exports = mongoose.model('contact', contactSchema, 'contacts');
