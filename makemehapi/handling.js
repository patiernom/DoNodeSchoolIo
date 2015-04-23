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

server.route({
    path: '/',
    method:'GET',
    handler: {
        file:Path.join(__dirname, "/views/index.html")
    }
});

server.start();