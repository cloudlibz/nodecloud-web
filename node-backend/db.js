//verbose will turn on additional log information which may be helpful for troubleshooting
const sqlite3 = require('sqlite3').verbose();

//create a db instance
let db = new sqlite3.Database("./user.sqlite3", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
        console.log('Database created!') 
        createTable()
    } 
})

const createTable = () => {
    console.log("create database table contacts");
    db.run("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, username TEXT, password TEXT)");
}

module.exports = db;