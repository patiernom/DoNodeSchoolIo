/**
 * Created with JetBrains WebStorm.
 * User: patiernom
 * Date: 17/04/14
 * Time: 18.08
 * To change this template use File | Settings | File Templates.
 */
var fs = require('fs'),
    path = require('path'),
    file = process.argv[2],
    extension = '.' + process.argv[3],
    tags = '.';

fs.readdir(file, function (err, files) {
    if (err) throw err;
    files.forEach(function(file){
        if ((path.extname(file) === extension) && (file)){
            console.log(file);
        }
    });
});