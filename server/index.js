const express = require('express');
const app = express();
const path = require('path');
const router = require('./router.js');

app.use('/', express.static(path.join(__dirname, '../client/public/')));
app.use('/api/', router);

const port = 1337;
app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports.app = app;
