//Add
//Subtract
//Multiply
//Divide

var assert = require("assert").strict;

describe("Mathimatical Operations - Test Suite", function () {
    this.timeout(500);
    before('Execute before all tests', function(){
        console.log('Execute before all tests');
    });
    after('Execute after all tests', function(){
        console.log('Execute after all tests');
    });

    //beforeEach
    //afterEach
    it("Addition of two numbers", function (done) {
        setTimeout(done,100)
        var a = 10;
        var b = 10;

        var c = a + b;
        assert.equal(c,20);
    });
    it("Multiply of two numbers", function () {

        var a = 10;
        var b = 10;

        var c = a * b;
        assert.equal(c,100);
    });

});