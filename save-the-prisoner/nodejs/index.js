'use strict';

let inputString = [
  '15',
  '4 6 1',
  '4 6 2',
  '4 6 3',
  '4 6 4',
  '6 4 1',
  '6 4 2',
  '6 4 3',
  '6 4 4',
  '6 4 5',
  '6 4 6',
  '5 5 1',
  '5 5 2',
  '5 5 3',
  '5 5 4',
  '5 5 5'
];
let currentLine = 0;

// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
  let result = (m % n) + (s - 1);
  if (result > n) {
    result = result % n;
  } else if (result === 0) {
    result = n;
  }
  return result;
}

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const t = Number.parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const nms = readLine().split(' ');

    const n = Number.parseInt(nms[0], 10);
    const m = Number.parseInt(nms[1], 10);
    const s = Number.parseInt(nms[2], 10);

    let result = saveThePrisoner(n, m, s);

    console.log(result);
  }
}

main();
