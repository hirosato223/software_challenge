const sqlSetup = require('./sqlSetup.js');
const parseData = require('./parseData.js');

const setup = async () => {
  await sqlSetup.drop('table', 'friends');
  await sqlSetup.drop('table', 'users');
  await sqlSetup.createUsersTable();
  await sqlSetup.createFriendsTable();
  await parseData.parseUsers();
  process.exit();
};

setup();

module.exports = setup;
