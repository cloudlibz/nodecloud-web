//verbose will turn on additional log information which may be helpful for troubleshooting
const sqlite3 = require("sqlite3").verbose();

// create a db instance
const db = new sqlite3.Database("./db.sqlite3", err => {
  
  if (err) {
    console.log("Error when creating the database", err);
  } else {
    createTableUser();
    createTableService();
    console.log("Database created!");
  }
});

const options = {
  client: "sqlite3",
  connection: {
    filename: "./db.sqlite3"
  },
  useNullAsDefault: true
};

const createTableUser = () => {
  
  const knex = require("knex")(options);
  if(knex.schema.hasTable("users")) return;

  knex.schema
    .createTable("users", function(t) {
      t.increments("id").primary();
      t.string("username").notNullable();
      t.string("email").notNullable();
      t.string("password").notNullable();
    })
    .then(console.log("User Table created"));
    // db.run("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, username TEXT, password TEXT)");
};

const createTableService = () => {
  
  const knex = require("knex")(options);
  if(knex.schema.hasTable("services")) return;

  knex.schema
    .createTable("services", function(t) {
      t.increments("id").primary();
      t.string("serviceid").notNullable();
      t.string("name").notNullable();
      t.string("type").notNullable();
      t.string("location").notNullable();
    })
    .then(console.log("Service Table created"))
    

  knex.schema
    .alterTable("services", function(t) {
      t.unique("serviceid");
    })
    .then("Service Table updated");
};

module.exports = db;
