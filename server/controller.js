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
  }
};
