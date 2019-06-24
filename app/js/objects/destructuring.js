var obj = {
  name: undefined, // make undefined to trigger default
  occupation: 'dev',
  age: 42,
  location: 'London Town',
  hobbies: {
    likes: 'PS4, gardening',
    dislikes: 'drivers who don\'t signal, washing up' 
  },
  quote:'You sound like your from Londannn mateee'
};
 
const { name = () => console.log('I am a default function')  , ...rest } = obj; // setting a default value.
console.log(name(), rest);  // My name is ....

/** The same can be done with arrays */

const time = 'o\'clock';
const place = 'somewhere';
const year = '2001';

const values = [time, place, year];

console.log(values); // [ 'o\'clock', 'somewhere', '2001' ] 

const {
  hobbies: {
    dislikes
  }
} = obj;

console.log(dislikes); // 