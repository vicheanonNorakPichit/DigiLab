const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  subject_name: {
    type: String,
    require: true,
  },
  active: {
    type: Boolean,
    require: true,
  },
});

const subjectDB = mongoose.model("subjectDB", schema);

module.exports = subjectDB;
