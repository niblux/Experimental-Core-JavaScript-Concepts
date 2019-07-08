/**
 * Functional Programming 
 */

// Currying - Partial Application
const fn = (a) => (b) => {
    return a + b;
};

/**
 * The idea here is the ability to pass in mutiple parameters and use returning values
 * in different scenarios. 
 * 
 * Basically you take a function with multiple arguments and you know 
 * that one of those arguments will have specific value but the other is undecided.
 */

const foo = fn(5);
const bar = (arr => arr = [foo(2)]);

console.log(bar(2));

// const fn2 = (c) => {
//     return (d) => {
//         return d * c
//     } 
// }

// - store first function
// const firstFunc = fn2(4); 
// // - now add firstFunc but with new param as your adding to the second function.
// const secondFunc = firstFunc(2); 

// console.log(secondFunc);

// compose function
// const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
// console.log(compose(fn(2), fn(2)));

// Pure Functions

// (First Class Functions) - functions that take functions as arguments 

// Higher-Order Functions



