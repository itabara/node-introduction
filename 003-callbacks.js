"use strict";

var maxTime = 100;

// If input is even, double it
// If input is odd, error
// (call takes random amount of time < 1s)

var eventDoubler = function(v, callback) {
    var waitTime = Math.floor(Math.random() * (maxTime + 1));
    if (v%2) {
        setTimeout(function(){ callback(new Error("Odd input"))}, waitTime);
    } else {
        setTimeout(function(){ callback(null, v * 2, waitTime)}, waitTime);
    }
};

var handleResults = function (err, results, time) {
    if (err) {
        console.log('ERROR: ' + err.message);
    } else {
        console.log('The results are: ' + results + '( ' + time + 'ms)');
    }
};

eventDoubler(2, handleResults);

console.log('--------');