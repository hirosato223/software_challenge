const sql = require('./sql.js');

const setup = async () => {
  await sql.drop('table', 'friends');
  await sql.drop('table', 'users');
  await sql.createUsersTable();
  // recreate friends table
  // recreate users table
  process.exit();
};

setup();

module.exports = setup;
