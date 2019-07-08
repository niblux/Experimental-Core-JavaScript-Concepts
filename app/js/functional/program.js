/* Task 1 Starter */
// const identity = function (args) {
//     return arguments[0];
// };

/* Task 2 Binary Function */
// const binary = function (a, b) {
//     return a + b;
// }

/* Task 3 - Delay Invocation */
// const unary = function (a) {
//     return function closure(b) {
//         return a + b
//     }
// }
// unary(2, 2);

/* Task 3 - Delay Invocation */
var total = 0;
const sumAll = function (a) {
    if (a === undefined) {
        var result = null;
        return result;
    } else {
        return total = total += a;
    }
}

const test = sumAll(2, 2)

module.exports = sumAll;
