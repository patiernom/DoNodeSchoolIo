/**
 * Created by Marco on 11/02/2015.
 */
(function(){
    var offset = 2,
        numberOfUrls = 3,
        http = require('http'),
        urls = (function(){
            var arr = [],
                i = 0;

            for (; i < numberOfUrls; i+=1) {
                arr[i] = process.argv[offset + i];
            }

            return arr;
        })(),
        bl = require('bl'),
        count = 0,
        perform = function(){
            return (function (){
                http.get(urls[count], function(res) {
                    res.pipe(bl(function (err, data) {
                        if (err){
                            console.error(err);
                        }

                        if (count < numberOfUrls){
                            count+=1;
                            console.log(data.toString());
                            perform(urls[count]);
                        }
                    }))
                });
            })();
        };

    perform();
}());