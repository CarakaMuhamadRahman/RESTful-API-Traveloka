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
                    "Some error occurred while creating the Hotels."
            });
        else res.send(data);
    });
};

// Retrieve all Hotel from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    Hotel.getAll(name, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Hotels."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    hotel.findById(req,params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Hotel with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Hotels with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};