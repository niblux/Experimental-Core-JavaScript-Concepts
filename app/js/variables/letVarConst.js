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
// console.log(b); // ReferenceError

if (true) {
    let c = 3; // block scoped
    console.log('i am in a block', c)
    a = 4;
}

console.log(a) // now 4
console.log(c) // ReferenceError