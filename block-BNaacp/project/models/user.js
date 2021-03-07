var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = new Schema(
  {
    name: String,
    email: String,
    sports: [String],
  },
  { timestamps: true }
);

var User = mongoose.model('User', user);

module.exports = User;
