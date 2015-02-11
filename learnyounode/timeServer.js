/**
 * Created by Marco on 12/02/2015.
 */
(function() {
    var net = require('net'),
        strFTime = require('strftime'),
        server = net.createServer(function (socket) {
            // YYYY-MM-DD hh:mm
            var date = new Date(Date.now());
            socket.end(strFTime('%Y-%m-%d %H:%M', date),"utf8"); // => 2013-07-06 07:42
        });

    server.listen(process.argv[2]);
})();