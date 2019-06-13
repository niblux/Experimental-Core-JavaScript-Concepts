// var 

var a = 1; // globally declared 1

function testVar() {
    a = 3;
    console.log(a) // now 3
}

testVar();

function testLet() {
    let b = 2;
    console.log('function scoped', b) // 2
}

testLet();
// console.log(b); // ReferenceError // script terminates here

if (true) {
    let c = 3; // block scoped
    console.log('i am in a block', c)
    a = 4;
}

console.log(a) // now 4
// console.log(c) // ReferenceError // or here 

const i = 'immutable';
// i = 'mutable';

console.log('You cannot change me i am', i); // Uncaught TypeError: Assignment to constant variable.


