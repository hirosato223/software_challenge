const { Pool } = require('pg');
const Promise = require('bluebird');
let config = require('../config.js');

const db = new Pool({
  user: config.db.user,
  host: config.db.host,
  database: config.db.name,
  password: config.db.password,
  port: config.db.port,
  max: 20
});

db.on('connect', () => {
  console.log('Successfully connected to database primaryDB');
});

db.on('remove', client => {
  console.log('Successfully removed client');
});

db.on('error', () => {
  console.log('Error connecting to DB: primaryDB');
});

db.connect();
Promise.promisifyAll(db);

module.exports = db;
