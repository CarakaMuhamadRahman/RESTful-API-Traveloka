const sql = require("./db.js");

// Create users
// Constructor
const Users = function(users) {
    this.username = users.username;
    this.pass = users.pass;
};

Users.createUser = (newUsers, result) => {
    sql.query("INSERT INTO users SET ?", newUsers, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Created Users: ", { id: res.insertId, ...newUsers });
        result(null, { id: res.insertId, ...newUsers });
    });
};

// Get All Users
Users.getAllUser = (username, result) => {
    let query = "SELECT * FROM users";
    if (username) {
        query += ` WHERE username LIKE '%${username}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("hotel: ", res);
        result(null, res);
    });
};

module.exports = Users;