var app = require("../add.js");
describe("Addition", function () {
    /*it("The function should add 2 numbers", function () {
        var value = app.AddNumber(5, 6);
        var value1 = app.AddNumber(5, 5);
        expect(value).toBe(11);
        expect(value1).toBe(13);
    });*/
    it("The function should add 5 & 6 and should give 11", function () {
        var value = app.AddNumber(5, 6);
        //var value1 = app.AddNumber(5, 5);
        expect(value).toBe(11);
        //expect(value1).toBe(13);
    });
});