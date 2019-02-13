"use strict";

function truncateString(str, num) {
	/* Function to truncate a string. */

	let newStr = str;

	if(str.length > num) {
		newStr = str.slice(0, num) + '...';
	}

	// console.log(str, num, newStr); //test output
	document.write(`String: <span class="bold">${ str }</span>, Count: <span class="bold">${ num }</span>, Result: <span class="bold">${ newStr }</span><br>`); //test output

	return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); //should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 11); //should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); //should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); //should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1); //should return "A...".
truncateString("Absolutely Longer", 2); //should return "Ab...".
