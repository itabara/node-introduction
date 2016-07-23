/**
 * Created by Iulian on 23/07/16.
 */
'use strict';

var mathFun = require('./006-mathfun');

var processResults = function(err, results, time){
    if (err){
        console.log("Error: " + err.message);
    } else{
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};

for (var i = 0; i < 10; i++){
    console.log("Calling 'evenDoubler' with parameter '" + i + "'");
    mathFun.evenDoubler(i, processResults);
}

console.log("--------------");

console.log("The 'foo' variable from module 'mathFun'" + mathFun.foo);

console.log("The 'maxtime' variable is not supported: " + mathFun.maxTime);