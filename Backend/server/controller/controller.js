var Subjectdb = require("../model/model");

// create and save new subject
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }
  // new subject
  const subject = new Subjectdb({
    subject_name: req.body.subject_name,
    active: req.body.active
  });

  // save subject in database
  subject
    .save(subject)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ message: 
err.message }) ||
        "Some errors occured when creating operation";
    });
};

// retrieve and return all Subjects/ retrieve and return a single Subject
exports.find = (req, res) => {
  if (req.query.subject_id) {
    const id = req.query.subject_id;

    Subjectdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message:
              "Cannot retreive data from this id. Maybe this id is not found",
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error retrieving data " });
      });
  } else {
    Subjectdb.find()
      .then((subject) => {
        res.send(subject);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error occurred while retrieving data",
        });
      });
  }
};

// update new identify subject by subject id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.subject_id;
  Subjectdb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Cannot update user. Maybe NOT FOUND",
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update information" });
    });
};

// update new identify subject by subject id
exports.delete = (req, res) => {
  const id = req.params.subject_id;

  Subjectdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Cannot delete by this ID." });
      } else {
        res.send({
          message: "Subject deleted successfully",
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error Occured when deleting data by id" });
    });
};
