

/* 
    I have a bunch of objects that i would like to update. 
    The only difference between them is they share a unique id, which i will use to identify which object i wish to update. 
*/
let todo1 = {
    text: 'I am the original object',
    id: 1,
    name: 'Nabs'
};

let todo2 = {
    text: 'I am also the original object',
    id: 2,
    name: 'Donna'
};

let todo1Updated = {
    text: 'I updated todo 1 with a spread',
    id: 1,
    name: 'Noah'
};

let todo2Updated = {
    text: 'I updated todo2 with a Object.assign',
    id: 2,
    name: 'Donna'
};

/* Lets create an array to store these objects in */

let arr = [];

arr.push(todo1);
arr.push(todo2);
console.log('arr', arr);

/*
    Now we have our array of objects we are going to perform an update
    this can be done in two ways.

    1. Use Object.assign()
        OR
    2. We can stay modern and use the spread operator
 */

// Spread 
var fooSpread = arr.map((todo) => {

    var returnValue = { ...todo };

    if (todo.id === todo1Updated.id) {
        return returnValue = todo1Updated
    }
    return returnValue;
})

console.log('SPREAD', fooSpread);
//   [
//     { text: 'I updated todo 1 with a spread', id: 1, name: 'Noah' },
//     { text: 'I am also the original object', id: 2, name: 'Donna' }
//   ]

// Object.assign()
var fooAssign = arr.map((todo) => {

    if (todo.id === todo2Updated.id) {
        return Object.assign({}, todo, todo2Updated)
    }
    return todo;
})

console.log('ASSIGN', fooAssign);

