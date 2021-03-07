var express = require('express');
var app = express();
var mongoose = require('mongoose');
var User = require('./models/user');

mongoose.connect(
  'mongodb://localhost/sample',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Mongoose is connected to mongodb');
  }
);

app.use(express.json());

app.post('/users', (req, res) => {
  User.create(req.body, (err, product) => {
    console.log(err, product);
    res.json(product);
  });
});

// _id: ObjectId('6044b63c69271714c10792ba');
app.get('/users/:id', (req, res) => {
  let Id = req.params.id;
  console.log(Id);
  //   User.find({ _id: `${Id}` }, (err, content) => {
  //     console.log(err);
  //     res.json(content);
  //   });
  //   User.findOne({ _id: `${Id}` }, (err, content) => {
  //     console.log(err);
  //     res.json(content);
  //   });
  User.findById(Id, (err, content) => {
    if (err) return next(err);
    res.json(content);
  });
});

app.put('/users/:id', (req, res) => {
  let id = req.params.id;
  //   User.update(
  //     { _id: `${id}` },
  //     req.body,
  //     { new: true },
  //     (err, updateContent) => {
  //       if (err) return console.log(err);
  //       res.json(updateContent);
  //     }
  //   );

  //   User.updateOne(
  //     { _id: `${id}` },
  //     req.body,
  //     { new: true },
  //     (err, updateContent) => {
  //       if (err) return console.log(err);
  //       res.json(updateContent);
  //     }
  //   );

  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updateContent) => {
    if (err) return next(err);
    res.json(updateContent);
  });
});

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, content) => {
    if (err) return next(err);
    res.send(content);
  });
});

app.use((err, res, req, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('listener is listening on port 3000');
});
