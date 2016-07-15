var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  var user = require('./models/user').user;
  var new_user = user.build({
    name: "kentaro horie"
  });
  new_user.save().success(function() {
    var show_user;
    user.find({
      where: {name: 'kentaro horie'}
    }).success(function(get_user) {
      show_user = {
        name: get_user.name
      };
      res.render('index', {user: show_user})
    })
  });
});

var server = app.listen(8888, function() {
		console.log('server start...');
		});

