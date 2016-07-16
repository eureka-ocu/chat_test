var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  var user = require('./models/user').user;
  var new_user = user.build({
    name: "kentaro horie"
  });
  new_user.save().then(function() {
    var show_user;
    user.find({
      where: {name: 'kentaro horie'}
    }).then(function(user) {
      res.render('index', { user: user.name })
    })
  });
});

var server = app.listen(8888, function() {
		console.log('server start...');
		});

