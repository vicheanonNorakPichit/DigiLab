const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

// description: root
// method: GET
route.get("/", services.homeRoutes);

// description: add subject
// method: GET
route.get("/add-subject", services.add_subject);

// description: update subject
// method: GET
route.get("/update-subject", services.update_subject);

// API for subject schema
route.post("/api/subjects", controller.create);
route.get("/api/subjects", controller.find);
route.put("/api/subjects/:subject_id", controller.update);
route.delete("/api/subjects/:subject_id", controller.delete);

// API

module.exports = route;
