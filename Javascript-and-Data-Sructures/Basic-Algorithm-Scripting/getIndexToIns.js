"use strict";

// Solution 1:

function getIndexToIns(arr, num) {
  /* Find position of num if pushed into sorted arr */

  let newArr = arr.slice();
  newArr.push(num);
  let numi = newArr.sort((a, b) => a - b).indexOf(num);

  // console.log(newArr, numi); //test output
  document.write(
    `<span class="bold">${
      JSON.stringify(arr)
    }</span>, Result: <span class="bold">${
      numi
    }</span><br>`
  ); //test output

  return numi;
}

getIndexToIns([10, 20, 30, 40, 50], 35); //should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30); //should return 2.
getIndexToIns([40, 60], 50); //should return 1.
getIndexToIns([3, 10, 5], 3); //should return 0.
getIndexToIns([5, 3, 20, 3], 5); //should return 2.
getIndexToIns([2, 20, 10], 19); //should return 2.
getIndexToIns([2, 5, 10], 15); //should return 3.
getIndexToIns([], 1); //should return 0.

document.write(`<hr>`);

// Solution 2:

function getIndexToIns2(arr, num) {
  /* Find position of num if pushed into sorted arr */

  let numi = arr
    .slice()
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);

  // console.log(numi); //test output
  document.write(
    `<span class="bold">${
      JSON.stringify(arr)
    }</span>, Result: <span class="bold">${
      numi
    }</span><br>`
  ); //test output

  return numi;
}

getIndexToIns2([10, 20, 30, 40, 50], 35); //should return 3.
getIndexToIns2([10, 20, 30, 40, 50], 30); //should return 2.
getIndexToIns2([40, 60], 50); //should return 1.
getIndexToIns2([3, 10, 5], 3); //should return 0.
getIndexToIns2([5, 3, 20, 3], 5); //should return 2.
getIndexToIns2([2, 20, 10], 19); //should return 2.
getIndexToIns2([2, 5, 10], 15); //should return 3.
getIndexToIns2([], 1); //should return 0.
