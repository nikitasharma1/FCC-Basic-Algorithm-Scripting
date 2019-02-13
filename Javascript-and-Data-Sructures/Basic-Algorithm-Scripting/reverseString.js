"use strict";

// Solution 1:

function reverseString(str) {
  /* Function to reverse the string */

  let newArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newArr.push(str[i]);
  }
  newArr = newArr.join("");

  // console.log(str, newArr);	//test output
  document.write(
    `String: <span class="bold">${
    	str
    }</span>, Reverse: <span class="bold">${
    	newArr
    }</span><br>`
  ); //test output

  return newArr;
}

reverseString("hello"); //should become "olleh".
reverseString("Howdy"); //should become "ydwoH".
reverseString("Greetings from Earth"); //should return "htraE morf sgniteerG".

document.write(`<hr>`);

//	Solution 2:

function reverseString2(str) {
  /* Function to reverse the string */

  let newStr = str
    .split("")
    .reverse()
    .join("");

  // console.log(str, newStr);	//test output
  document.write(
    `String: <span class="bold">${
    	str
    }</span>, Reverse: <span class="bold">${
    	newStr
    }</span><br>`
  ); //test output
  return newStr;
}

reverseString2("hello"); //should become "olleh".
reverseString2("Howdy"); //should become "ydwoH".
reverseString2("Greetings from Earth"); //should return "htraE morf sgniteerG".
