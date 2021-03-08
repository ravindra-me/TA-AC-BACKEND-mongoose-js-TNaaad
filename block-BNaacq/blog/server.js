var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost/blog',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'contacted to mongodb');
  }
);
app.listen(3000, () => {
  console.log('listener is started on port 3000');
});
