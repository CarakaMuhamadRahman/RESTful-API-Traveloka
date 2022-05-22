const Hotel = require("../models/hotel.model.js");

// Create and save a new hotel
exports.create = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create Hotel
    const hotel = new Hotel({
        name: req.body.name,
        location: req.body.location,
        bookmark: req.body.bookmark || false
    });

    // Save Hotel to database
    Hotel.create(hotel, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    "Some error occurred while creating the Tutorial."
            });
        else res.send(data);
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    Hotel.getAll(name, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
};