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
    path: '/foo/bar/baz/{filename}',
    method:'GET',
    handler: {
        directory: {
            path: Path.join(__dirname, "/views/")}
    }
});

server.start();