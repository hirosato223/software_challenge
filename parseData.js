const fs = require('fs');

module.exports = {
  parseUsers: () => {
    fs.readFile('./sampleUsers.txt', 'utf8', (err, text) => {
      let data = sText.split(/\n/).slice(1);
      return data;
    });
  },

  parseFriends: () => {
    fs.readFile('./sampleFriends.txt', 'utf8', (err, text) => {
      let data = sText.split(/\n/).slice(1);
      return data;
    });
  }
};
