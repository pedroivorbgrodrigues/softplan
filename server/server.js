const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const api = require('./routes/api');

const { MONGO_CONNECTION_STRING } = require('./constants');

const PORT = 3000;

mongoose
  .connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);
app.use(express.static(path.join(__dirname, 'static')));
app.use((req, res) => {
  res.status(404).json({ message: 'You lost mate?' });
});
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  return res.status(500).json({ message: `An unexpected error has ocurred. Err: ${err.message}` });
});
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
