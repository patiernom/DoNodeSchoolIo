/**
 * Created by Marco on 22/04/2015.
 */
var Hapi = require('hapi'),
    server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/proxy',
    method:'GET',
    handler: {
        proxy: {
            host: '127.0.0.1',
            port: 65535
        }
    }
});

server.start();