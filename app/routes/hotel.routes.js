module.exports = app => {
    const hotel = require("../controllers/hotel.controller.js");
    const users = require("../controllers/users.controller.js")
    var router = require("express").Router();

    // Create a new Hotel
    router.post("/", hotel.create);

    // Retrieve all Hotel
    router.get("/", hotel.findAll);

    // Create a new Users
    router.post("/users", users.createUser);

    // Retrieve all Users
    router.get("/users", users.findAllUser);

    app.use('/api/traveloka', router);
};