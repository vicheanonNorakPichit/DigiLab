var Experimentdb = require("../model/experiment_model");

// create and save new subject
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }
  // new experiment
  const experiment = new Experimentdb({
    experiment_name: req.body.experiment_name,
    grade: req.body.grade,
    chapter: req.body.chapter,
    lesson: req.body.lesson,
    subject_id: req.body.subject_id,
    description: req.body.description,
    step: req.body.step,
    unity_scene: req.body.unity_scene,
    phet_url: req.body.phet_url,
    active: req.body.active
  });

  // save experiment in database
  experiment
    .save(experiment)
    .then((data) => {
      // res.send(data);
      res.redirect("/add-experiment");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message }) ||
        "Some errors occured when creating operation";
    });
};

// retrieve and return all Subjects/ retrieve and return a single Subject
exports.find = (req, res) => {
  if (req.query.experiment_id) {
    const id = req.query.experiment_id;

    Experimentdb.findById(id)
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
    Experimentdb.find()
      .then((experiment) => {
        res.send(experiment);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error occurred while retrieving data",
        });
      });
  }
};


// update new identify experiment by experiment id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.experiment_id;
  Experimentdb.findByIdAndUpdate(id, req.body)
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


// update new identify experiment by experiment id
exports.delete = (req, res) => {
  const id = req.params.experiment_id;

  Experimentdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Cannot delete by this ID." });
      } else {
        res.send({
          message: "Experiment deleted successfully",
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error Occured when deleting data by id" });
    });
};