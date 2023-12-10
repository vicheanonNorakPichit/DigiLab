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
