/**
 * Created by Iulian on 23/07/16.
 */
"use strict";

var request = require('request');

var s = request('http://www.google.com');

s.on('data', function(chunk){
   console.log(">>>> Data >>>> " + chunk);
});

s.on('end', function(){
    console.log(">>>>> DONE !!!! >>>>>");
});