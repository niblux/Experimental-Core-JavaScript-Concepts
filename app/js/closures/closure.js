// function createCounter() {
//     let counter = 0
//     const myFunction = function () {
//         counter = counter + 1
//         return counter
//     }
//     return myFunction
// }
// const increment = createCounter()
// const c1 = increment()
// const c2 = increment()
// const c3 = increment()
// console.log('example increment', c1, c2, c3)


// Encapsulating function (Module Pattern)

const myModule = (function () {

    // private function only for use within the function
    function privateFunc(name, age) {
        return `My name is ${name} and i am ${age} years old`
    }

    // Functions to expose publicy 
    return {
        getName: function () {
            return privateFunc('Nabil', 33)
        },

        getAge: function () {
            return privateFunc('Nabil', 33)
        }
    }

})();

console.log(myModule.getAge())
// console.log(myModule.getAge())