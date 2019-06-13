/* Fill */

// let arr = Array(5).fill(Math.random().toFixed(2)); // populate an array of random numbers
let arr = Array(5).fill(1.1); // populate an array of random numbers
// console.log(arr);

/* Map */
// Add a string to each item in the Array.
const newArray = arr.map(item => item + ' Word'); // one line implicit return.
// console.log(newArray);

/* Reduce */
// Simple example : Add every item in the array together. 
const totalItems = arr.reduce((acc, val) => { return acc + val });
// console.log(totalItems);

// More complex example
const fields = [];

fields[1] = {
    "id": 1, "first_name": "Terra", "last_name": "Cabel",
    "email": "tcabel0@xrea.com", "gender": "Female",
    "ip_address": "174.56.124.75"
};

fields[2] = {
    "id": 2, "first_name": "Graham", "last_name": "Macias",
    "email": "gmacias1@blogger.com", "gender": "Male",
    "ip_address": "87.191.142.99"
};


fields[3] = {
    "id": 3, "first_name": "Vivyan", "last_name": "Attridge",
    "email": "vattridge2@163.com", "gender": "Female",
    "ip_address": "101.99.74.187"
};

const resolvedFields = fields.reduce((accum, item) => {
    if (typeof item === 'object') {
        console.log('accum', accum)
        return accum.concat(Object.entries(item));
    }
    return accum.concat(item);
}, []);

console.log(resolvedFields);



