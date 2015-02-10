/**
 * Created by patiernom on 08/09/2014.
 */
(function(){
    var http = require('http'),
        url = process.argv[2],
        bl = require('bl');

    http.get(url, function(res) {
        res.pipe(bl(function (err, data) {
            if (err){
                return console.error(err);
            }

            console.log(data.length);
            console.log(data.toString());
        }))
    });
}());