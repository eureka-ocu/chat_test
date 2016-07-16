var express = require('express');
var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
var createModels = require('./models');

var app = express();
var sequelize = new Sequelize(config.database, config.username, config.password, config);

app.set('view engine', 'jade');

app.set('models', createModels(sequelize, Sequelize));

app.get('/', function(req, res) {
  var userModel = app.get('models').userModel;
  userModel
    .create({
      name: "kentaro horie"
    })
    .then(function() {
      userModel
        .find({
          where: { name: 'kentaro horie' }
        })
        .then(function(foundUser) {
          res.render('index', { user: foundUser.name })
        });
    });
});

sequelize
  .sync()
  .then(function() {
    app.listen(8888, function() {
      console.log('server start...');
    });
  })
