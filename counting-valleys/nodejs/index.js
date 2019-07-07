'use strict';

let inputString = ['8', 'UDDDUDUU'];
let currentLine = 0;

function readLine() {
  return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
  let valleys = 0;

  for (let i = 0, level = 0; i < n; ++i) {
    s[i] === 'U' ? level++ : level--;
    level === 0 && s[i] === 'U' ? valleys++ : valleys;
  }

  return valleys;
}

function main() {
  const n = parseInt(readLine(), 10);
  const s = readLine();

  let result = countingValleys(n, s);

  console.log(result);
}

main();
