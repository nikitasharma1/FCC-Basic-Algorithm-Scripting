"use strict";

function confirmEnding(str, target) {
  /* Function to check if string: str  ends with the given substring: target */

  let tf = str.slice(str.length - target.length) === target;

  // console.log(str, target, tf);
  document.write(
    `String: <span class="bold">${
    	str
    }</span>, Substring: <span class="bold">${
    	target
    }</span>, Result: <span class="bold">${
    	tf
    }</span><br>`
  );

  return tf;
}

confirmEnding("Bastian", "n"); //should return true.
confirmEnding("Congratulation", "on"); //should return true.
confirmEnding("Connor", "n"); //should return false.
confirmEnding(
  "Walking on water and developing software from a specification are easy if both are frozen",
  "specification"
); //should return false.
confirmEnding("He has to give me a new name", "name"); //should return true.
confirmEnding("Open sesame", "same"); //should return true.
confirmEnding("Open sesame", "pen"); //should return false.
confirmEnding("Open sesame", "game"); //should return false.
confirmEnding(
  "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing",
  "mountain"
); //should return false.
confirmEnding("Abstraction", "action"); //should return true.
