/**
 * Created by Marco on 22/04/2015.
 */
var Hapi = require('hapi'),
    Path = require('path'),
    fs = require('fs'),
    rot13 = require("rot13-transform"),
    server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method:'GET',
    handler:function(request, reply){
        var filename = Path.join(__dirname, "/source/sample.txt"),
            rStream = fs.createReadStream(filename);

        reply(rStream.pipe(rot13()));
    }
});

server.start();