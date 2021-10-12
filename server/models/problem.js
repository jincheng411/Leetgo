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
  count: {
    type: Number,
    default: 0
  },
  lastTimeSolved: {
    type: Date,
    require: true
  },
  fav: {
    type: Boolean
  }
})
const Problem = mongoose.model('Problem', ProblemSchema);

module.exports = Problem;