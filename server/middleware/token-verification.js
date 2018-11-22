const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants');

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Private routes, please provide a token' });
  }
  const token = authorizationHeader.split(' ')[1];
  if (token === null || token.trim() === '') {
    return res.status(401).json({ message: 'Private route. Authrorization header found but bearer token not present.' });
  }
  const payload = jwt.verify(token, JWT_SECRET);
  if (!payload) {
    return res.status(401).json({ message: 'Private route. Token found but is not valid!' });
  }
  req.userId = payload.subject;
  return next();
};

module.exports = verifyToken;
