"use strict";

// Solution 1:

function factorialize(num) {
  /* Function to calculate factorial of a number */

  let f = 1;
  for (let i = 1; i <= num; i++) {
    f = f * i;
  }

  // console.log(f); //test output
  document.write(`${num}! = <span class="bold">${f}</span><br>`); //test output

  return f;
}

factorialize(5); //should return 120.
factorialize(10); //should return 3628800.
factorialize(20); //should return 2432902008176640000.
factorialize(0); //should return 1.
factorialize(1); //should return 1.

document.write(`<hr>`);

// Solution 2:

function factorialize2(num) {
  /* Function to calculate factorial of a number */

  if (num === 0) {
    return 1;
  }

  return num * factorialize2(num - 1);
}

let x = [
  { val: 5, fac: factorialize2(5) }, //should return 120.
  { val: 10, fac: factorialize2(10) }, //should return 3628800.
  { val: 20, fac: factorialize2(20) }, //should return 2432902008176640000.
  { val: 0, fac: factorialize2(0) }, //should return 1.
  { val: 1, fac: factorialize2(1) } //should return 1.
];

for (let i = 0; i < x.length; i++) {
  document.write(
    `${x[i]["val"]}! = <span class="bold">${x[i]["fac"]}</span><br>`
  ); //test output
}
