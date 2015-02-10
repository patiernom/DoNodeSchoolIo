/**
 * Created with JetBrains WebStorm.
 * User: patiernom
 * Date: 16/04/14
 * Time: 12.35
 * To change this template use File | Settings | File Templates.
 */
var sumArrayNum = function() {
    var out = 0;
    var sum = function (num){
        if (typeof(parseInt(num)) === 'number') {
            out = out + parseInt(num, 10);
        }
    };

    return{
        sumNum: sum,
        total: function(){
            return out;
        }
    }
};

function sumArrayInArgs(source, start){
    var i = start || 0,
        item = source[i],
        response = sumArrayNum();

    for(; item; i++, item = source[i]){
        response.sumNum(item);
    }

    return response.total();
}

(function(){
    console.log(sumArrayInArgs(process.argv,2));
}());
