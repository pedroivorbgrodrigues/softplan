const express = require('express');
const Contact = require('../models/contact');
const tokenVerification = require('../middleware/token-verification');

const router = express.Router();

router.get('/', tokenVerification, (req, res) => {
  Contact.find({})
    .exec((err, docs) => {
      if (err) {
        return res.status(500).json({ message: `Failed to get contacts data. Err: ${err.message}` });
      }
      return res.status(200).json({ payload: docs });
    });
});

module.exports = router;
