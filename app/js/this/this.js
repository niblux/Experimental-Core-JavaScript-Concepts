// Implicit Binding
var name = 'Global Name';

var obj = {
    name: 'Nabil',
    age: 33,
    greet: function () { console.log('name', this.name) }
}

obj.greet();

// Arrow function lexical context scoping 
var name = 'Global Name';

var obj = {
    name: 'Nabil',
    age: 33,
    greet: () => console.log('name', this.name)
}

obj.greet();

/* 
Careful when using this in arrow function as it will 
make "this" the lexical context. Global or Function Scope 
*/

// Explicit Binding with call and apply
function explicitFunc() {
    console.log(this.name);
}

var obj = {
    name: 'Nabil',
    age: 33
};

explicitFunc.call(obj);

function foo(s1, s2, s3, s4, s5, s6) {
    console.log(this.name, s1, s2, s3, s4, s5, s6);
}

var obj = {
    name: 'Nabil',
    age: 33
};

const soundofmusic = ['Do', 'Re', 'Mi', 'Fa', 'La', 'So'];

foo.call(obj, soundofmusic[0], soundofmusic[1], soundofmusic[2]);
// "Nabil", "Do", "Re", "Mi", "undefined", "undefined", "undefined"

foo.apply(obj, soundofmusic);
// "Nabil", "Do", "Re", "Mi", "Fa", "La", "So"

/* This is similar to what a spread operator would do */
const arr = [3, 4, 5];

const arr2 = [1, 2, ...arr];
// [1, 2, 3, 4, 5]

function foo(s1, s2, s3) {
    console.log(this.name, s1, s2, s3);
}

var obj = {
    name: 'Nabil',
    age: 33
};

const soundofmusic = ['Do', 'Re', 'Mi', 'Fa', 'La', 'So'];

const test1 = foo.bind(obj, soundofmusic[0], soundofmusic[1], soundofmusic[2]);
// "Nabil", "Do", "Re", "Mi",

test1();

// New Constructor
function Bar(name, age) {
    this.name = name;
    this.age = age;
    return `${name} and ${age}`
}

const baz = new Bar('nabs', 44);
console.log('baz', baz);

