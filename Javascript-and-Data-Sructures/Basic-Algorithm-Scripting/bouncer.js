"use strict";

// Solution 1:

function bouncer(arr) {
  	/* Function to remove falsy values from array */
  	
  	let newArr = arr.filter((x) => x);

  	// console.log(newArr); //test output
  	document.write(`<span class="bold">${ JSON.stringify(arr) }</span>, Result: <span class="bold">${ JSON.stringify(newArr) }</span><br>`); //test output

  return newArr;
}

bouncer([7, "ate", "", false, 9]); 				//should return [7, "ate", 9].
bouncer(["a", "b", "c"]); 						//should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]); 	//should return [].
bouncer([1, null, NaN, 2, undefined]); 			//should return [1, 2].

document.write(`<hr>`);

// Solution 2:

function bouncer(arr) {
  	/* Function to remove falsy values from array */

  	let newArr = arr.filter(Boolean);

  	// console.log(newArr); //test output
  	document.write(`<span class="bold">${ JSON.stringify(arr) }</span>, Result: <span class="bold">${ JSON.stringify(newArr) }</span><br>`); //test output

  return newArr;
}

bouncer([7, "ate", "", false, 9]); 				//should return [7, "ate", 9].
bouncer(["a", "b", "c"]); 						//should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]); 	//should return [].
bouncer([1, null, NaN, 2, undefined]); 			//should return [1, 2].
