const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller"); // Subject Controller
const experiment_controller = require("../controller/experiment_controller"); // Experiment Controller


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

// description: experiment list
// method: GET
route.get("/experiment_list", services.experiment_list);

// // description: add subject
// // method: GET
route.get("/add-experiment", services.add_experiment);

// // description: update subject
// // method: GET
route.get("/update-experiment", services.update_experiment);


// API for experiment list
route.post("/api/experiments", experiment_controller.create);
route.get("/api/experiments", experiment_controller.find);
route.put("/api/experiments/:experiment_id", experiment_controller.update);
route.delete("/api/experiments/:experiment_id", experiment_controller.delete);

module.exports = route;
