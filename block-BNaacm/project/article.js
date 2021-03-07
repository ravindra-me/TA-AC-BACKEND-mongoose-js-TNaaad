var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var article = new Schema({
  title: String,
});

var articleModel = mongoose.model('Article', article);

module.exports = articleModel;
