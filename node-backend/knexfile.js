// Update with your config settings.

module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./user.sqlite3"
  },
  useNullAsDefault: true

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './user.sqlite3'
  //   },
  //   useNullAsDefault: true
  // },

  // production: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './user.sqlite3'
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
};
