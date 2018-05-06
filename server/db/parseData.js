const db = require('./db.js');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const path = require('path');

module.exports = {
  parseUsers: async () => {
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
  },

  parseFriends: async () => {
    let data = await readFile(
      path.join(__dirname, '../../sampleFriends.txt'),
      'utf8'
    );
    let parsedFriends = data.split(/\n/).slice(1);
    console.log(parsedFriends);
    for (let i = 0; i < parsedFriends.length; i++) {
      let splitRecord = parsedFriends[i].split(' ');
      try {
        console.log(splitRecord);
        await db.queryAsync(
          `INSERT INTO friends (user_id, target_id) VALUES
            ('${splitRecord[1]}', '${splitRecord[3]}');`
        );
      } catch (err) {
        console.log('Error:', err);
      }
    }
  }
};
