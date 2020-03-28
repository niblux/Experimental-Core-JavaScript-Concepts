// A different type of reduce example
const prices = [ 2.99, 5.99, 7.2, 15, 2000, 0.99 ] // should return [ 7.2, 15, 2000 ]

const higherPrices = prices.reduce((acc, val) => {
    if(val > 6 ) {
      acc.push(val);
    } 
    return acc;
}, []);

const array = [1, 3, 4, 7, 13];

// Traditional for loop
var total = 0;
for (var i  = 0; i < array.length; i++){
   total  += array[i];
}

// Composable reduce function
const addNumbers = (acc, currVal) => acc + currVal;
const reduce = array.reduce(addNumbers, 0)

// Just a nice clean arrow function reduce w/implicit return
const reduceOneLine = array.reduce((accumulator, currentValue) => accumulator + currentValue);
