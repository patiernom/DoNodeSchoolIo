/**
 * Created by Marco on 17/04/2014.
 */
var fs = require('fs'),
    file = process.argv[2],
    tags = /[\n\r]/g,
    count = 0;

fs.readFile(file, function (err, data) {
    if (err) throw err;
    count = data.toString().match(tags).length || count;
    console.log(count);
});