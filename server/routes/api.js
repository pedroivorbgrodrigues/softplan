const express = require('express');
const jwt = require('jsonwebtoken');
const AccessCode = require('../models/accessCode');
const { JWT_SECRET } = require('../constants');

const router = express.Router();

router.get('/', (req, res) => res.send('API'));

const generateToken = accessCode => jwt.sign({ subject: accessCode.id }, JWT_SECRET);

router.post('/register', (req, res) => {
  const accessCode = new AccessCode(req.body);
  accessCode.save()
    .then((registeredCode) => {
      const token = generateToken(registeredCode);
      res.status(200).json({ message: `Access code ${registeredCode.code} created!`, token });
    })
    .catch(err => res.status(500).json({ message: `Error creating accessCode ${accessCode.code}. Err: ${err.message}` }));
});
router.post('/login', (req, res) => {
  const loginData = req.body;
  AccessCode.findOne({ code: loginData.code })
    .then((foundAccessCode) => {
      if (!foundAccessCode) {
        return res.status(401).json({ message: 'Invalid access code!' });
      }
      const token = generateToken(foundAccessCode);
      return res.status(200).json({ message: `Access Code ${foundAccessCode.code} found. Logging in...`, token });
    });
});

module.exports = router;
