// GET DATA FROM API 

const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make request to api
  axios
    .get("http://localhost:3000/api/subjects")
    .then(function (response) {
      res.render("index", { subjects: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_subject = (req, res) => {
  res.render("./include/subject/add_subject");
};

exports.update_subject = (req, res) => {
  axios
    .get("http://localhost:3000/api/subjects", {
      params: { subject_id: req.query.subject_id },
    })
    .then(function (subjectdata) {
      res.render("./include/subject/update_subject", {
        subject: subjectdata.data,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.experiment_list = (req, res) => {
  // Make request to api
  axios
    .get("http://localhost:3000/api/experiments")
    .then(function (response) {
      res.render("experiment_list", { experiments: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_experiment = (req, res) => {
  res.render("./include/experiment_list/add_experiment");
};

exports.update_experiment = (req, res) => {
  axios
    .get("http://localhost:3000/api/experiments", {
      params: { experiment_id: req.query.experiment_id },
    })
    .then(function (experimentdata) {
      res.render("./include/experiment_list/update_experiment", {
        experiment: experimentdata.data,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};