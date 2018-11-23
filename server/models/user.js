const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  code: String,
});

module.exports = mongoose.model('user', userSchema, 'users');
