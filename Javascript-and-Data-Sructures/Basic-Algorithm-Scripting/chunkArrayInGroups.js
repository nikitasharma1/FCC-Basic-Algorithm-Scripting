"use strict";

function chunkArrayInGroups(arr, size) {
	/* Function to split array into groups of same size */

	let newArr = arr.slice();
	let newArr2 = [];

	while(newArr.length) {
		newArr2.push(newArr.splice(0, size));
	}

	// console.log(newArr); //test output
	document.write(`<span class="bold">${ JSON.stringify(arr) }</span>, Size: <span class="bold">${ size }</span>, Result: <span class="bold">${ JSON.stringify(newArr2) }</span><br>`); //test output
	
	return newArr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); //should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); //should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); //should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); //should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); //should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
