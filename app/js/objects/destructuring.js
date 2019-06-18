var obj = {
  name:() => { return console.log('im a function') },
  occupation:'dev', 
  age:42, 
  location:'London Town',
  hobbies: {
    likes:'PS4, gardening', 
    dislikes:'reading, coding'
  }
};

const { name, ...rest} = obj; // setting a default value.
console.log(name, rest); 