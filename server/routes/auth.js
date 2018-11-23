const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../constants');

const router = express.Router();

const generateToken = accessCode => jwt.sign({ subject: accessCode.id }, JWT_SECRET);

router.post('/register', (req, res) => {
  const accessCode = new User(req.body);
  accessCode.save()
    .then((registeredCode) => {
      const token = generateToken(registeredCode);
      res.status(200).json({ message: `User created with acess code ${registeredCode.code}!`, token });
    })
    .catch(err => res.status(500).json({ message: `Error creating user with acess code ${accessCode.code}. Err: ${err.message}` }));
});
router.post('/login', (req, res) => {
  const loginData = req.body;
  User.findOne({ code: loginData.code })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(401).json({ message: 'Invalid access code!' });
      }
      const token = generateToken(foundUser);
      return res.status(200).json({ message: `Access Code ${foundUser.code} found. Logging in...`, token });
    });
});

module.exports = router;
