"use strict";

let STRS = [
	"The quick brown fox jumped over the lazy dog",
	"May the force be with you",
	"Google do a barrel roll",
	"What is the average airspeed velocity of an unladen swallow",
	"What if we try a super-long word such as otorhinolaryngology"
];

// Solution 1:

function findLongestWordLength(str) {
	/* Function to find the longest word length */

	let max = 0;
	let newStr = str.split(' ');
	let leni = newStr[0].length;

	for(let i = 0; i < newStr.length; i++) {
		leni = newStr[i].length;
		if(leni > max) {
			max = leni;
		}
	}

	// console.log(max); //test output
	document.write(`String: <span class="bold">${ str }</span>, Max Word Length: <span class="bold">${ max }</span><br>`);

	return max;	
}

findLongestWordLength(STRS[0]),		//should return 120.
findLongestWordLength(STRS[1]),		//should return 3628800.
findLongestWordLength(STRS[2]),		//should return 2432902008176640000.
findLongestWordLength(STRS[3]),		//should return 1.
findLongestWordLength(STRS[4])		//should return 1.

document.write(`<hr>`);

// Solution 2:

function findLongestWordLength2(str) {
	/* Function to find the longest word length */

	let max = str.split(' ').reduce((max, x) => (max > x.length) ? max : x.length, 0);

	// console.log(max); //test output
	document.write(`String: <span class="bold">${ str }</span>, Max Word Length: <span class="bold">${ max }</span><br>`);

	return max;	
}

findLongestWordLength2(STRS[0]),		//should return 120.
findLongestWordLength2(STRS[1]),		//should return 3628800.
findLongestWordLength2(STRS[2]),		//should return 2432902008176640000.
findLongestWordLength2(STRS[3]),		//should return 1.
findLongestWordLength2(STRS[4])			//should return 1.

document.write(`<hr>`);

// Solution 3:

function findLongestWordLength3(str) {
	/* Function to find the longest word length */

	let max = str.split(' ').reduce((max, x) => Math.max(max, x.length), 0);

	// console.log(max); //test output
	document.write(`String: <span class="bold">${ str }</span>, Max Word Length: <span class="bold">${ max }</span><br>`);

	return max;	
}

findLongestWordLength3(STRS[0]),		//should return 120.
findLongestWordLength3(STRS[1]),		//should return 3628800.
findLongestWordLength3(STRS[2]),		//should return 2432902008176640000.
findLongestWordLength3(STRS[3]),		//should return 1.
findLongestWordLength3(STRS[4])			//should return 1.

document.write(`<hr>`);

// Solution 4:

function findLongestWordLength4(str) {
	/* Function to find the longest word length */

	let newStr = str.split(' ');

	if(newStr.length === 1) {
		return newStr[0].length;
	}

	if(newStr[0].length >= newStr[1].length) {
		newStr.splice(1, 1);
		return findLongestWordLength4(newStr.join(' '));
	}

	if(newStr[0].length <= newStr[1].length) {
		return findLongestWordLength4(newStr.slice(1).join(' '));
	}

	return 0;	
}

let y = [
	findLongestWordLength4(STRS[0]),		//should return 120.
	findLongestWordLength4(STRS[1]),		//should return 3628800.
	findLongestWordLength4(STRS[2]),		//should return 2432902008176640000.
	findLongestWordLength4(STRS[3]),		//should return 1.
	findLongestWordLength4(STRS[4])			//should return 1.
];

for(let i = 0; i < x.length; i++) {
	document.write(`String: <span class="bold">${ STRS[i] }</span>, Max Word Length: <span class="bold">${ y[i] }</span><br>`);
}
