// print process.argv
// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });

const trimProcess = process.argv.slice(2);

trimProcess.forEach((val, index) => {
    console.log(`${val} : ${index}`);
})

// The above call to process.argv return whatever command you type after running the node file.
/*
    node process.js "These are the commands i am passing" prints

    These : 0
    are : 1
    the : 2
    commands : 3
    i : 4
    am : 5
    passing : 6

*/