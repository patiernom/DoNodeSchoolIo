/**
 * Created by patiernom on 28/04/2014.
 */
var modularDir = require('./modules/getFilteredList.js'),
    directory = process.argv[2],
    extension = process.argv[3],
    actionCallback = function(err, data){
        if (err) {
            console.log('Error: ' + err);
        }

        data.forEach(function(file){
            console.log(file);
        })
    };

modularDir(directory, extension, actionCallback);