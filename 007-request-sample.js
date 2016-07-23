/**
 * Created by Iulian on 23/07/16.
 */
var request = require('request');

request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage.
    }
});