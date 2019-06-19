
/* 
Knex.js is SQL query builder for SQLITE3 designed to be flexible, portable and fun to use
Document: http://knexjs.org/
*/

const knex = require('knex')(require('./knexfile'))

module.exports = {

    userList () {
        return knex('users')
                .select('*')
                .then(users => console.log(users))
    },

    signUp (email, username, password) {

        var user = {
            username : username,
            email : email,
        }

        return knex('users')
                .insert({ email: email, username: username, password: password})
                .returning('id')
                .then(
                    function (id){
                        user['id'] = id[0];
                        let res ={'success': true, 'message': 'Login Successful', data:user}
                        return res;
                    }
                )
    },

    login (username, password) {
        return knex('users')
                .where({ username: username })
                .select('password', 'id', 'email')
                .then(function(result) {
                    if (!result || !result[0])  {  
                        // not found!
                        let res = {'success': false, 'message': 'Invalid username!'}
                        return res;
                    }
                    var pass = result[0].password;
                    if (password === pass) {
                        // login
                        var user = {
                            username : username,
                            email : result[0].email,
                            id : result[0].id
                        }
                        let res = {'success': true, 'message': 'Login Successful', data:user}
                        return res;
                    } else {
                        // failed login
                        let res = {'success': false, 'message': 'Please enter correct password'}
                        return res;
                    }
                    })
                .catch(function(error) {
                    console.log(error);
                });
    }
}