var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema(
  {
    name: String,
    email: { type: String, lowercase: true },
    age: { type: Number, default: 0 },
    password: { type: String, minlength: 5 },
    createdAt: { type: Date, default: new Date() },
    favourites: [String],
  },
  { timestamps: true }
);

var userModel = mongoose.model('User', user);
module.exports = userModel;
