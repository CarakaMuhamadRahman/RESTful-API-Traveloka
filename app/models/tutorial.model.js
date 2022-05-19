const sql = require("./db.js");

// Constructor
const Tutorial = function(tutorial) {
    this.name = tutorial.name;
    this.location = tutorial.location;
};

Tutorial.create = (newTutorial, result) => {
    sql.query("INSERT INTO hotel SET ?", newTutorial, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Created Hotel: ", { id: res.insertId, ...newTutorial });
        result(null, { id: res.insertId, ...newTutorial });
    });
};

Tutorial.getAll = (name, result) => {
    let query = "SELECT * FROM hotel";
    if (name) {
        query += ` WHERE name LIKE '%${name}%'`;
    }
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("tutorials: ", res);
        result(null, res);
    });
};

module.exports = Tutorial;