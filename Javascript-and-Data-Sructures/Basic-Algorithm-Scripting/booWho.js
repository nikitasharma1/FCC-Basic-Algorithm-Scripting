"use strict";

function booWho(bool) {
  /* Function to check if value is boolean primitive */

  let result = typeof bool === "boolean";

  // console.log(bool, result); //test output
  document.write(
    `Value: <span class="bold">${
      typeof bool === "object"
        ? JSON.stringify(bool)
        : bool === [].slice
        ? "[].slice"
        : String(bool)
    }</span>, Result: <span class="bold">${
      result
    }</span><br>`
  ); //test output

  return result;
}

booWho(true); //should return true.
booWho(false); //should return true.
booWho([1, 2, 3]); //should return false.
booWho([].slice); //should return false.
booWho({ a: 1 }); //should return false.
booWho(1); //should return false.
booWho(NaN); //should return false.
booWho("a"); //should return false.
booWho("true"); //should return false.
booWho("false"); //should return false.
