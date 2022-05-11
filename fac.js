var exports = module.exports = {};
exports.Factorial = function (num) {
    if (num < 0) {
        throw new Error("no")
    }
    else if (num == 1 || num == 0) {
        return 1;
    }
    else {
        return num * this.Factorial(num - 1)
    }
};