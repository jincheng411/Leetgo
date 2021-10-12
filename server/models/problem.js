const mongoose = require('mongoose');
var ProblemSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  number: {
      type: Number,
      required: true
  },
  url: {
    type: String,
    require: true
  },
  frequency: {
    type: Number,
    default: 0
  },
  lastTimeSolved: {
    type: Date,
    require: true
  },
  difficulty: {
    type: Number,
    require: true
  }
  is_favor: {
    type: Boolean
  }
})
const Problem = mongoose.model('Problem', ProblemSchema);

module.exports = Problem;