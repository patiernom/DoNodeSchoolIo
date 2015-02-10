/**
 * Created by patiernom on 28/04/2014.
 */
module.exports = function(uri, ext, callback) {
    var fs = require('fs'),
        path = require('path'),
        extension = '.' + ext,
        listOfFile = [];

    fs.readdir(uri, function (err, files) {
        if (err) {
            return callback(err);
        }

        files.forEach(function(file){
            if(path.extname(file) === extension){
                listOfFile.push(file);
            }
        });

        return callback(null, listOfFile);
    });
};