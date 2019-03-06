// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr); 
}

function finished(arr){
  console.log(arr.length);
}

getLength(items, finished);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[3]);
}

function finishedLast(lastItem) {
  console.log(lastItem); 
}
last(items, finishedLast);


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}

function finishedSums(result) {
  console.log(result);
}
sumNums(4, 6, finishedSums);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb( x * y );
}

function finishedMulti(product){
  console.log(product);
}
multiplyNums(4, 6, finishedMulti);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  list.filter (item => list);
  cb(true);
}

function finishedContains(answer){
  console.log(answer);
}

contains("Gun", items, finishedContains);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}