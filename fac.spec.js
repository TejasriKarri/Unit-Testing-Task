var app = require("../fac.js");
describe("Factorial", function () {
    it("gives the fac of a number", function () {
        var value = app.Factorial(5);
        expect(value).toBe(120);
    });
});