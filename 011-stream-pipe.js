/**
 * Created by Iulian on 23/07/16.
 */
var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

var s = request('http://www.google.com');

//s.pipe(process.stdout);

s.pipe(zlib.createGzip()).pipe(fs.createWriteStream("google.html.gz"));