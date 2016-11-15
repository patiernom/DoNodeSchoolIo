"use strict";

var express = require('express'),
    commands = process.argv,
    app = express(),
    data = [
      {
        title: 'Shopping',
        detail: commands[3] || ''
      },
      {
        title: 'Hair cut',
        detail: commands[4] || ''
      }
    ];

app.set('port', (commands[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

app.use('/', function(req, res) {
  res.render('index', {data: data});
});

app.listen(app.get('port'), function() {});
