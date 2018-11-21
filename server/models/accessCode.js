const mongoose = require('mongoose');

const { Schema } = mongoose;
const accessCodeSchema = new Schema({
  code: String,
});

module.exports = mongoose.model('accessCode', accessCodeSchema, 'accessCodes');
