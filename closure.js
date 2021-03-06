// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function someFunction(banana) {
  let banana = true;
  if ( !banana ) {
    console.log (`Banana is : ${banana}`);  
  } else {
    console.log (`Banana is ${banana}`);
  }
}
someFunction(false);
someFunction(true);

// ==== Challenge 2: Create a counter function ====
let count = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return(++count);
};

console.log(counter());
console.log(counter());
console.log(counter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = (param1, direction) => {
  return direction(param1);
}

function increment (param1) {
  return ++param1;
}

function decrement (param1) {
  return --param1;
}

console.log(counterFactory(4, increment));
console.log(counterFactory(3, decrement));
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

