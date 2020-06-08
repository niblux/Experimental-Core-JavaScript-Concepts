const assert = require('assert');

/* Solution 1 : Using standard for loop and if condition */

// const alpha = 'abcdefghijklmnopqrstuvwxyz';
// const sortedLetters = alpha.split('');

// function alphabetPosition(text) {

//     let textArray = text.toLowerCase().split('');

//     let result = [];
//     for (let i = 0; i < textArray.length; i++) {
//         const el1 = textArray[i];
//         for (let j = 0; j < sortedLetters.length; j++) {
//             const el2 = sortedLetters[j];
//             if (el1 === el2) {
//                 result.push(sortedLetters.indexOf(el1) + 1);
//             }
//         }
//     }
//     return result.join(' ');
// }

/* Solution 2 : Using forEach and ternary condition */

// const alpha = 'abcdefghijklmnopqrstuvwxyz';
// const sortedLetters = alpha.split('');

// function alphabetPosition(text) {
//     let result = [];
//     let textArray = text.toLowerCase().split('');

//     textArray.forEach((el1) => {
//         sortedLetters.forEach((el2) => {
//             el1 === el2 ? result.push(sortedLetters.indexOf(el1) + 1) : '';
//         })
//     });
//     // console.log('result', result.join(''));

//     return result.join(' ');
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

const alpha = 'abcdefghijklmnopqrstuvwxyz';
const sortedLetters = alpha.split('');

function alphabetPosition(text) {
    let result = [];
    let textArray = text.toLowerCase().split('');

    textArray.map((el1) => {
        sortedLetters.map((el2) => {
            el1 === el2 ? result.push(sortedLetters.indexOf(el1) + 1) : '';
        })
    });
    return result.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

try {
    assert.equal(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
    assert.equal(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
    console.log('Passed.');
} catch (error) {
    console.error('Failed.');
}
