// TODO: add functions to query database
const db = require('./db/db.js');

module.exports = {
  getAllUsers: async () => {
    try {
      let data = await db.queryAsync(`SELECT * from users`);
      return data.rows;
    } catch (err) {
      console.log(err);
    }
  },

  getFriends: async code => {
    try {
      let userData = await db.queryAsync(
        `SELECT target_id from friends WHERE user_id = '${code}'`
      );
      let targetData = await db.queryAsync(
        `SELECT user_id from friends WHERE target_id = '${code}'`
      );

      let userCodes = [];
      for (let record of userData.rows) {
        userCodes = [...userCodes, record.target_id];
      }
      for (let record of targetData.rows) {
        userCodes = [...userCodes, record.user_id];
      }

      let friendRecords = [];
      for (let i = 0; i < userCodes.length; i++) {
        let record = await module.exports.getUserFromCode(userCodes[i]);
        friendRecords = [...friendRecords, record[0]];
      }
      return friendRecords;
    } catch (err) {
      console.log(err);
    }
  },

  getUserFromCode: async code => {
    try {
      let data = await db.queryAsync(
        `SELECT * from users WHERE code = '${code}'`
      );
      return data.rows;
    } catch (err) {
      console.log(err);
    }
  }
};
