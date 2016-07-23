/**
 * Created by Iulian on 23/07/16.
 */
"use strict";

var should = require('should');
var fun = require('./006-mathfun');

describe('MathFun', function(){
    describe('when used synchronously', function(){
        it('should double even numbers correctly', function(){
            fun.evenDoublerSync(2).should.equal(4);
        });

        it.skip('should thow on odd numbers', function(done){
                (function(){
                    fun.evenDoublerSync(3);
                }).should.throw(/Odd/);
                done();
            });
    });

    describe('when used asynchronously', function(){
        it('should double even numbers correctly', function(done){
            fun.evenDoubler(2, function(err, result){
                should.not.exist(err);
                result.should.equal(4);
                // tell mocha the test is done
                done();
            });
        });
        it('should thow on odd numbers', function(done){
            fun.evenDoubler(3, function(err, results){
                should.exist(err);
                should.not.exist(results);
                done();
            });
        });
    });
});