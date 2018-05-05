const db = require('./db.js');

module.exports = {
  drop: async (type, name) => {
    try {
      await db.queryAsync(`DROP ${type} IF EXISTS ${name}`);
      console.log(`Successfully dropped ${name} ${type}.`);
    } catch (err) {
      console.log(err);
      console.log(`Error dropping ${name} ${type}.`);
    }
  },

  createUsersTable: async () => {
    try {
      await db.queryAsync(`
        CREATE TABLE IF NOT EXISTS users
        (
          id SERIAL,
          name VARCHAR(255) UNIQUE NOT NULL,
          CONSTRAINT users_pk
            PRIMARY KEY(id)
        )
      `);
      console.log('Successfully created users table.');
    } catch (err) {
      console.log('Error creating users table.', err);
    }
  }
};
