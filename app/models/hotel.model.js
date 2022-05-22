const sql = require("./db.js");

// Constructor
const Hotel = function(hotel) {
    this.name = hotel.name;
    this.location = hotel.location;
    this.bookmark = hotel.bookmark;
};

Hotel.create = (newHotel, result) => {
    sql.query("INSERT INTO hotel SET ?", newHotel, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Created Hotel: ", { id: res.insertId, ...newHotel });
        result(null, { id: res.insertId, ...newHotel });
    });
};

Hotel.getAll = (name, result) => {
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
        console.log("hotel: ", res);
        result(null, res);
    });
};

module.exports = Hotel;