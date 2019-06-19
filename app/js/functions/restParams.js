function addValues() {
    // make arguments into Array
    console.log(Array.from(arguments).reduce((prev, current) => prev + current));
};

addValues(1, 2, 3, 4, 5); // 15

const restValues = (firstParam, secondParam ,  ...params) => {
    console.log(firstParam , secondParam , params.reduce((prev, current) => prev + current));
    // 1 - firstParam, 2 - secondParam, 17 total of remaining values. 
};

restValues(1, 2, 3, 4, 5, 5); // 20