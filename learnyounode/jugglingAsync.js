/**
 * Created by Marco on 11/02/2015.
 */
(function(){
    var offset = 2,
        numberOfUrls = 3,
        http = require('http'),
        getUrl = function(i){
            return process.argv[i];
        },
        bl = require('bl'),
        count = 0,
        perform = function(url){
            return (function (){
                http.get(url, function(res) {
                    res.pipe(bl(function (err, data) {
                        if (err){
                            console.error(err);
                        }

                        printResult(data.toString());
                    }))
                });
            })();
        },
        getIndex = function(){
            return offset + count;
        },
        printResult = function(result){
            if (count < numberOfUrls){
                count+=1;
                console.log(result);
                perform(getUrl(getIndex()));
            }
        };

    perform(getUrl(getIndex()));
}());