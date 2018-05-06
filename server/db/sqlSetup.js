const db = require('./db.js');

module.exports = {
  drop: async (type, name) => {
    try {
      await db.queryAsync(`DROP ${type} IF EXISTS ${name}`);
      console.log(`Successfully dropped ${name} ${type}.`);
    } catch (err) {
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
          code VARCHAR(255) UNIQUE NOT NULL,
          CONSTRAINT users_pk
            PRIMARY KEY(id)
        )
      `);
      console.log('Successfully created users table.');
    } catch (err) {
      console.log('Error creating users table.', err);
    }
  },

  createFriendsTable: async () => {
    try {
      await db.queryAsync(`CREATE TABLE IF NOT EXISTS friends
      (
        id SERIAL,
        user_id INT NOT NULL,
        target_id INT NOT NULL,
        CONSTRAINT friends_id
          PRIMARY KEY(id),
        CONSTRAINT fk_friends_user_id
          FOREIGN KEY(user_id) REFERENCES users(id)
          ON DELETE CASCADE,
        CONSTRAINT fk_friends_target_id
          FOREIGN KEY(target_id) REFERENCES users(id)
          ON DELETE CASCADE
      )
      `);
      console.log('Successfully created friends table.');
    } catch (err) {
      console.log('Error creating friends table');
    }
  }
};
