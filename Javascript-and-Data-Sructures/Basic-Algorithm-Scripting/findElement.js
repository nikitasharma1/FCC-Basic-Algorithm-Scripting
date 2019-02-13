"use strict";

function findElement(arr, func) {
  /* Function to find the first element that satisfies a given conditon */

  let num;

  for (let i in arr) {
    if (func(arr[i])) {
      num = arr[i];
      break;
    }
  }

  // console.log(arr, String(func) ,num); //test output
  document.write(
    `<span class="bold">${
    	JSON.stringify(arr)
    }</span>, <span class="bold">${
    	String(func)
    }</span>, Result: ${
      num
    }<br>`
  ); //test output

  return num;
}

findElement([1, 3, 5, 8, 9, 10], function(num) {
  return num % 2 === 0;
}); //should return 8.
findElement([1, 3, 5, 9], function(num) {
  return num % 2 === 0;
}); //should return undefined.
