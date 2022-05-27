const Users = require("../models/users.model.js");

// Create and save new Users
exports.createUser = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create Users
    const users = new Users({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        pass: req.body.pass
    });

    // Save Hotel to database
    Users.createUser(users, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    "Some error occurred while creating the Tutorial."
            });
        else res.status(200).send({
                status:
                    "true",
                
                message:
                    "Success.",
                data
        });
    });
}

// Retrieve all Tutorials from the database.
exports.findAllUser = (req, res) => {
    const email = req.query.email;
    Users.getAllUser(email, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else res.status(200).send({
                status:
                    "true",
                message:
                    "Success",
                data
        });
    });
};