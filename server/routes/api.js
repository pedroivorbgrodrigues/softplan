const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => res.send('API'));

router.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save()
    .then(registeredUser => res.status(200).json({ message: `User ${registeredUser.email} created!` }))
    .catch(err => res.status(500).json({ message: `Error creating user ${user.email}. Err: ${err.message}` }));
});
router.post('/login', (req, res) => {
  const userData = req.body;
  User.findOne({ email: userData.email })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(401).json({ message: 'Invalid e-mail' });
      }
      if (userData.password !== foundUser.password) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      return res.status(200).json({ message: `User ${foundUser.email} logged. Here is your token!` });
    });
});

module.exports = router;
