const alpha = 'abcdefghijklmnopqrstuvwxyz';
const sortedLetters = alpha.split('');

console.log(sortedLetters.length);

function alphabetPosition(text) {

    let textArray = text.split('');
    console.log('textArray', textArray);

    // loop text
    // loop sortedLetters

    let result = [];
    sortedLetters.reduce((prev, next, index, array) => {
        result = textArray.filter(i => {
            i === prev && prev === typeof String ? prev.push(array[index]) : null;
        });
        console.log('result', result);
        console.log('prev', prev);
        return prev;
    }, []);
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

