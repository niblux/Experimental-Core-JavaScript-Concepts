/* 

A Simple example of an Async and Sync method 
- Synchrounous meaning it is can block the thread of execution, as it waiting for 
the previous operation to finish before it continues.

- Asynchrounous meaning it is non-blocking and will execute without waiting, 
and finish when it is complete.

*/

// Synchronous 
var fs = require('fs');
var timestamp = new Date().toString();
var contents;

fs.writeFileSync('date.txt', timestamp);
contents = fs.readFileSync('date.txt');

console.log('Checking contents');
console.assert(contents == timestamp);

console.log('I am the last line of the script');

// Asynchronous 
var fs = require('fs');
var timestamp = new Date().toString();
var contents;

fs.writeFile('date.txt', timestamp, function (err, contents) {
    if (err) throw err;
    fs.readFile('date.txt', function (err, contents) {
        if (err) throw err;
        console.log('Checking contents');
        console.assert(contents == timestamp);

    })
});

console.log('I am the last line of the script');


