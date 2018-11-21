const DATABASE = 'agenda';
const MONGO_CONNECTION_STRING = `mongodb://mongo:27017/${DATABASE}`;
const JWT_SECRET = 'hireme';
module.exports = { MONGO_CONNECTION_STRING, JWT_SECRET };
