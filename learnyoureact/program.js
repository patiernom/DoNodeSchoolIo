"use strict";

var express = require('express'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server'),
    DOM = React.DOM,
    body = DOM.body,
    div = DOM.div,
    script = DOM.script,
    browserify = require('browserify'),
    babelify = require("babelify"),
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
    ignore: false,
    compact: false
});

var TodoBox = require('./views/index.jsx');

app.use('/bundle.js', function (req, res) {
    res.setHeader('content-type', 'application/javascript');

    browserify({ debug: true })
        .transform(babelify.configure({
            presets: ["react", "es2015"],
            compact: false
        }))
        .require("./app.js", { entry: true })
        .bundle()
        .pipe(res);
});

app.use('/', function(req, res) {
    var initialData = JSON.stringify(data),
        markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {data: data})),
        html = ReactDOMServer.renderToStaticMarkup(body(null,
          div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
          script({
            id: 'initial-data',
            type: 'text/plain',
            'data-json': initialData
          }),
          script({src: '/bundle.js'})
        ));

    res.setHeader('Content-Type', 'text/html');
    res.end(html); //'<!DOCTYPE html>' + html
});

app.listen(app.get('port'), function() {});
