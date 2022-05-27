const sql = require("./db.js");

// Create users
// Constructor
const Users = function(users) {
    this.name = users.name;
    this.email = users.email;
    this.phone = users.phone;
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
Users.getAllUser = (email, result) => {
    let query = "SELECT * FROM users";
    if (email) {
        query += ` WHERE email LIKE '%${email}%'`;
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