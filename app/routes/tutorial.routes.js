module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();

    // Create a new Hotel
    router.post("/", tutorials.create);

    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    app.use('/api/tutorials', router);
};