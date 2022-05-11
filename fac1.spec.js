function fac1(num) {
    if (num < 0) {
        throw new Error("no")
    }
    else if (num == 1 || num == 0) {
        return 1;
    }
    else {
        return num * fac1(num - 1)
    }
}
describe("Factorial", function () {
    it("gives the fac1 of a number", function () {
        expect(fac1(5)).toBe(120);
    });
});

