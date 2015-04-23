/**
 * Created by Marco on 22/04/2015.
 */
var Hapi = require('hapi'),
    Path = require('path'),
    server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});

server.route({
    path: '/',
    method:'GET',
    handler: {
        view: "index.html"
    }
});

server.start();