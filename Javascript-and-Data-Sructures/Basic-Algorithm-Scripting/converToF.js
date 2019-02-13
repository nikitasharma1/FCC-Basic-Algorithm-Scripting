"use strict";

function convertToF(celsius) {
	/* Function to convert from Celsius to Fahrenheit */

	let fahrenheit = celsius * 9 / 5 + 32;
	
	// console.log(`Celsius: ${ celsius }, Fahrenheit: ${ fahrenheit }`);	//test output
	document.write(`Celsius: <span class="bold">${ celsius }</span>, `);			//test output
	document.write(`Fahrenheit: <span class="bold">${ fahrenheit }</span><br>`);	//test output
	
	return fahrenheit;
}

convertToF(-30);	//should return a value of -22
convertToF(-10);	//should return a value of 14
convertToF(0);		//should return a value of 32
convertToF(20);		//should return a value of 68
convertToF(30);		//should return a value of 86
