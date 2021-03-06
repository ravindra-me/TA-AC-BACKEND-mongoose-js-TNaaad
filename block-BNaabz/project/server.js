var express = require('express');
var app = express();
var logger = require('morgan');
var mongos = require('mongoose');

mongos.connect(
  'mongodb://localhost:27017/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'mongoose contented to mongodb');
  }
);

app.listen(3000, () => {
  console.log('server is started on port 3000');
});
