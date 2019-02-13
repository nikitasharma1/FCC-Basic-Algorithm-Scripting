"use strict";

// Solution 1:

function mutation(arr) {
	/* if the string in the first element of the array contains
	all of the letters of the string in the second element of the array*/

	let newArr = arr.map((x) => x.toLowerCase().split(''));
	let result = newArr[1].reduce((res, x) => res && (newArr[0].indexOf(x) !== -1), true);

	// console.log(arr, result); //test output
	document.write(`<span class="bold">${ JSON.stringify(arr) }</span>, Result: <span class="bold">${ result }</span><br>`); //test output

	return result;
}

mutation(["hello", "hey"]); 						//should return false.
mutation(["hello", "Hello"]); 						//should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); 	//should return true.
mutation(["Mary", "Army"]); 						//should return true.
mutation(["Mary", "Aarmy"]); 						//should return true.
mutation(["Alien", "line"]); 						//should return true.
mutation(["floor", "for"]); 						//should return true.
mutation(["hello", "neo"]); 						//should return false.
mutation(["voodoo", "no"]); 						//should return false.

document.write(`<hr>`);

// Solution 2:

function mutation2(arr) {
	/* if the string in the first element of the array contains
	all of the letters of the string in the second element of the array*/

	let newArr = arr.map((x) => x.toLowerCase().split(''));
	let result = newArr[1].every((x) => newArr[0].indexOf(x) !== -1);

	// console.log(arr, result); //test output
	document.write(`<span class="bold">${ JSON.stringify(arr) }</span>, Result: <span class="bold">${ result }</span><br>`); //test output

	return result;
}

mutation2(["hello", "hey"]); 						//should return false.
mutation2(["hello", "Hello"]); 						//should return true.
mutation2(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); //should return true.
mutation2(["Mary", "Army"]); 						//should return true.
mutation2(["Mary", "Aarmy"]); 						//should return true.
mutation2(["Alien", "line"]); 						//should return true.
mutation2(["floor", "for"]); 						//should return true.
mutation2(["hello", "neo"]); 						//should return false.
mutation2(["voodoo", "no"]); 						//should return false.
