"use strict";

// Solution 1:

function repeatStringNumTimes(str, num) {
	/* Function to repeat a string given number of times */

	let newStr = '';
	for(let i = 0; i < num; i++) {
		newStr += str;
	}

	// console.log(str, num, newStr); //test output
	document.write(`String: <span class="bold">${ str }</span>, Count: <span class="bold">${ num }</span>, Result: <span class="bold">${ newStr }</span><br>`); //test output
	
	return newStr;
}

repeatStringNumTimes("*", 3); //should return "***".
repeatStringNumTimes("abc", 3); //should return "abcabcabc".
repeatStringNumTimes("abc", 4); //should return "abcabcabcabc".
repeatStringNumTimes("abc", 1); //should return "abc".
repeatStringNumTimes("*", 8); //should return "********".
repeatStringNumTimes("abc", -2); //should return 

document.write(`<hr>`);

// Solution 2:

function repeatStringNumTimes2(str, num) {
	/* Function to repeat a string given number of times */

	if(num <= 0) {
		return '';
	}

	if(num === 1) {
		return str;
	}

	return str + repeatStringNumTimes2(str, num - 1);
}

let z = [
	["*", 3, repeatStringNumTimes2("*", 3)],		//should return "***"
	["abc", 3, repeatStringNumTimes2("abc", 3)],	//should return "abcabcabc".
	["abc", 4, repeatStringNumTimes2("abc", 4)],	//should return "abcabcabcabc".
	["abc", 1, repeatStringNumTimes2("abc", 1)],	//should return "abc".
	["*", 8, repeatStringNumTimes2("*", 8)],		//should return "********".
	["abc", -2, repeatStringNumTimes2("abc", -2)]	//should return "".
];

for(let i = 0; i < z.length; i++) {
	document.write(`String: <span class="bold">${ z[i][0] }</span>, Count: <span class="bold">${ z[i][1] }</span>, Result: <span class="bold">${ z[i][2] }</span><br>`); //test output
}

document.write(`<hr>`);

// Solution 3:

function repeatStringNumTimes3(str, num) {
	/* Function to repeat a string given number of times */

	let newStr = '';

	if(num > 0) {
		newStr = str.repeat(num);
	}

	// console.log(str, num, newStr); //test output
	document.write(`String: <span class="bold">${ str }</span>, Count: <span class="bold">${ num }</span>, Result: <span class="bold">${ newStr }</span><br>`); //test output

	return newStr;
}

repeatStringNumTimes3("*", 3); //should return "***".
repeatStringNumTimes3("abc", 3); //should return "abcabcabc".
repeatStringNumTimes3("abc", 4); //should return "abcabcabcabc".
repeatStringNumTimes3("abc", 1); //should return "abc".
repeatStringNumTimes3("*", 8); //should return "********".
repeatStringNumTimes3("abc", -2); //should return "".
