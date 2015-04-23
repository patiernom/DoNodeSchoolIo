/**
 * Created by Marco on 24/02/2015.
 */
(function(){
    var http = require('http'),
        portNumber = process.argv[2],
        filePath = process.argv[3],
        fs = require('fs');

    var server = http.createServer(function (req, res) {
        var readStream = fs.createReadStream(filePath);

        readStream.on('open', function () {
            readStream.pipe(res);
        });

        readStream.on('error', function(err) {
            res.end(err);
        });
    });
    server.listen(portNumber);
}());