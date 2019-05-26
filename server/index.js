const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

const todo = require('./routes/todo')(router);

const PORT = 3200;
const MONGO_URI = 'mongodb://localhost:27017/oxez';

mongoose.connect(MONGO_URI, { useNewUrlParser: true }, err => {
  if (err) console.error(err);
  else console.log('You have connected to the database');
});

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/todo', todo);

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
