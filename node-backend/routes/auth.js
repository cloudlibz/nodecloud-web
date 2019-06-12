var express = require("express");
var router = express.Router();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var db = require('../db');

router.post('/signup', jsonParser,function(req, res){
    var body = req.body;
    var email = body["email"];
    var password = body["password"];
    var username = body["username"];
    console.log("signup called", email);
    db.run("INSERT INTO users ( email , username , password ) VALUES (?,?,?)", [email, username, password], (err) => {
        if(err) {
            return console.log(err.message); 
        }
        console.log('Row was added to the table');
    });
    res.json({"message": "User created", "success": true});
})

router.post('/login', jsonParser,function(req, res){
    var body = req.body;
    var username = body["username"];
    var password = body["password"];
    console.log(username);
    let sql = `SELECT password 
           FROM users
           WHERE username='${ username }'`;

    db.get(sql,(err, pass) =>  {
        console.log("DB DATA", pass);
        console.log("USER INPUT", password);
        if(pass.password == password){
            res.json({"message": "Login Sucessful", "success": true, "data": {"id":2, "username":"aa"}});
        } else{
            res.json({"message": "Login unsucessful", "success": false, "data": {"id":2, "username":"aa"}});

        }
    })
    
})

module.exports = router;