/**
 * Created by patiernom on 08/09/2014.
 */
(function(){
    var http = require('http'),
        url = process.argv[2];

    http.get(url, function(res) {
        res.setEncoding('utf8');
        res.on('data', console.log);
        res.on('error', console.error)
    });
}());