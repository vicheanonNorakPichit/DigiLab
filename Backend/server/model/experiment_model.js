const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  experiment_name: {
    type: String,
    require: true,
  },
  grade: {
    type: Number,
    require: true,
  },
  chapter: {
    type: Number,
    require: true,
  },
  lesson: {
    type: String,
    require: true,
  },
  subject_id: {
    // foreign key from subject schema
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  step: {
    any: {},
  },
  qna: {
    any: {},
  },
  unity_scene: {
    type: String,
  },
  phet_url: {
    type: String,
  },
  active: {
    type: Boolean,
    require: true,
  },
});


const experimentDB = mongoose.model("experimentDB", schema);

module.exports = experimentDB;
