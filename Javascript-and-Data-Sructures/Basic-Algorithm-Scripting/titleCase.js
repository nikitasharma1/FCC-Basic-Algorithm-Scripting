"use strict";

// Solution 1:

function titleCase(str) {
  /* Function to capitalize first letter of each word
	keeping rest of the letters lowercase */

  let newStr = str.toLowerCase();
  newStr = newStr
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // console.log(newStr); //test output
  document.write(
    `String: <span class="bold">${
      str
    }</span>, Result: <span class="bold">${
      newStr
    }</span><br>`
  ); //test output

  return newStr;
}

titleCase("I'm a little tea pot"); //should return I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt"); //should return Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); //should return Here Is My Handle Here Is My Spout.

document.write(`<hr>`);

// Solution 2:

function titleCase2(str) {
  /* Function to capitalize first letter of each word
	keeping rest of the letters lowercase */

  let newStr = str.toLowerCase();
  newStr = newStr
    .split(" ")
    .map(w => w.replace(w.charAt(0), w.charAt(0).toUpperCase()))
    .join(" ");

  // console.log(newStr); //test output
  document.write(
    `String: <span class="bold">${
      str
    }</span>, Result: <span class="bold">${
      newStr
    }</span><br>`
  ); //test output

  return newStr;
}

titleCase2("I'm a little tea pot"); //should return I'm A Little Tea Pot.
titleCase2("sHoRt AnD sToUt"); //should return Short And Stout.
titleCase2("HERE IS MY HANDLE HERE IS MY SPOUT"); //should return Here Is My Handle Here Is My Spout.

document.write(`<hr>`);

// Solution 3:

function titleCase3(str) {
  /* Function to capitalize first letter of each word
	keeping rest of the letters lowercase */

  let newStr = str.toLowerCase();
  newStr = newStr.replace(/(^|\s)[a-z]/g, c => c.toUpperCase());

  // console.log(newStr); //test output
  document.write(
    `String: <span class="bold">${
      str
    }</span>, Result: <span class="bold">${
      newStr
    }</span><br>`
  ); //test output

  return newStr;
}

titleCase3("I'm a little tea pot"); //should return I'm A Little Tea Pot.
titleCase3("sHoRt AnD sToUt"); //should return Short And Stout.
titleCase3("HERE IS MY HANDLE HERE IS MY SPOUT"); //should return Here Is My Handle Here Is My Spout.
