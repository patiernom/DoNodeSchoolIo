/**
 * Created by Marco on 16/04/2014.
 */
var fs = require('fs'),
    tags = /[\n\r]/g,
    file = process.argv[2],
    content = fs.readFileSync(file),
    bufString = content.toString(),
    count = bufString.match(tags).length || 0;

console.log(count);