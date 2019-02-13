"use strict";

function frankenSplice(arr1, arr2, n) {
  /* Copy each element of the first array into the second array, in order
  at the given index. */

  let newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);

  // console.log(arr1, arr2, newArr); //test output
  document.write(
    `<span class="bold">${
      JSON.stringify(arr1)
    }</span>, <span class="bold">${
      JSON.stringify(arr2)
    }</span>, N: <span class="bold">${
      n
    }</span>, Result: <span class="bold">${
      JSON.stringify(newArr)
    }</span><br>`
  );

  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1); //should return [4, 1, 2, 3, 5, 6].
frankenSplice([1, 2, 3], [4, 5], 1); //should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1); //should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); //should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
