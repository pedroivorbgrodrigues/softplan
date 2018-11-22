const express = require('express');
const authRoutes = require('./auth');
const contactsRoutes = require('./contacts');

const router = express.Router();

router.get('/', (req, res) => res.send('API'));// send static swagger generated documentation
router.use('/auth', authRoutes);
router.use('/contact', contactsRoutes);
module.exports = router;
