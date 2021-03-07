var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var article = new Schema({
  name: String,
  pages: Number,
});
