var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Mongoose is connected to mongodb');
  }
);
app.listen(3000, () => {
  console.log('listener is listening on port 3000');
});
