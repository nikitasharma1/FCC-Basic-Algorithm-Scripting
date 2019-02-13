"use strict";

let ARRS = [
	[[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]],
	[[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]],
	[[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]
];

// Solution 1:

function largestOfFour(arr) {
	/* Function to return array containing maximum of each array */

	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		let max = arr[i][0];
		for(let j = 0; j < arr[i].length; j++) {
			if(arr[i][j] > max) {
				max = arr[i][j];
			}
		}
		newArr.push(max);
	}

	// console.log(newArr); //test output
	document.write(`<span class="bold">${ JSON.stringify(arr) }</span>, Resultant: <span class="bold">${ JSON.stringify(newArr) }</span><br>`); //test output

	return newArr;
}

largestOfFour(ARRS[0]);	//should return [27, 5, 39, 1001].
largestOfFour(ARRS[1]);	//should return [9, 35, 97, 1000000].
largestOfFour(ARRS[2]);	//should return [25, 48, 21, -3].

document.write(`<hr>`);

// Solution 2:

function largestOfFour2(arr) {
	/* Function to return array containing maximum of each array */

	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		newArr.push(Math.max(...arr[i]));
	}

	// console.log(newArr); //test output
	document.write(`<span class="bold">${ JSON.stringify(arr) }</span>, Resultant: <span class="bold">${ JSON.stringify(newArr) }</span><br>`); //test output

	return newArr;
}

largestOfFour2(ARRS[0]);	//should return [27, 5, 39, 1001].
largestOfFour2(ARRS[1]);	//should return [9, 35, 97, 1000000].
largestOfFour2(ARRS[2]);	//should return [25, 48, 21, -3].

document.write(`<hr>`);

// Solution 3:

function largestOfFour3(arr) {
	/* Function to return array containing maximum of each array */

	let newArr = arr.map((arri) => Math.max(...arri));

	// console.log(newArr); //test output
	document.write(`<span class="bold">${ JSON.stringify(arr) }</span>, Resultant: <span class="bold">${ JSON.stringify(newArr) }</span><br>`); //test output

	return newArr;
}

largestOfFour3(ARRS[0]);	//should return [27, 5, 39, 1001].
largestOfFour3(ARRS[1]);	//should return [9, 35, 97, 1000000].
largestOfFour3(ARRS[2]);	//should return [25, 48, 21, -3].
