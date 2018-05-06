const db = require('./db.js');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const path = require('path');

const parseUsers = async () => {
  let data = await readFile(
    path.join(__dirname, '../../sampleUsers.txt'),
    'utf8'
  );
  let parsedUsers = data.split(/\n/).slice(1);
  for (let i = 0; i < parsedUsers.length; i++) {
    let splitRecord = parsedUsers[i].split(' ');
    try {
      await db.queryAsync(
        `INSERT INTO users (name, code) VALUES
          ('${splitRecord[2]}', '${splitRecord[0]}');`
      );
    } catch (err) {
      console.log('Error:', err);
    }
  }
};

const parseFriends = () => {
  fs.readFile('../../sampleFriends.txt', 'utf8', async (err, data) => {
    let parsedFriends = data.split(/\n/).slice(1);
    console.log('hey');
    process.exit();
  });
};

// parseUsers();
// parseFriends();

module.exports.parseUsers = parseUsers;
