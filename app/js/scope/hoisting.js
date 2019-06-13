/**** HOISTING ****/

/*
 * Best practice to place variable declarations at the top of function scope.
 */

console.log(hst); // undefined
var hst = 42;

hoist();

function hoist() {
    console.log(bar); // undefined
    var bar = 'The meaning of life';
}

// Function Hoisting 
foo();

function foo() {
    console.log('Hello up there !')
};

bar();

const bar = function () {
    console.log('Im down here'); // Reference Error
}








