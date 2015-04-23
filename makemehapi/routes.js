/**
 * Created by Marco on 22/04/2015.
 */
var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({path: '/{name}', method:'GET', handler: function(request, reply){
    reply('Hello ' +  encodeURIComponent(request.params.name));
}});

server.start();