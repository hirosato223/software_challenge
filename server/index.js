const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const path = require('path');
// const router = require('./router.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use('/*', () => {
  console.log('hello');
});

const port = 1337;
app.listen(port, () => {
  console.log('Listening on port', port);
});