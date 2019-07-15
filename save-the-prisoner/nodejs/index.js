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
/**
 * The function to find the prisoner who receives the last sweet
 * @param {number} n The number of prisoners
 * @param {number} m The number of sweets
 * @param {number} s The chair number to begin passing out sweets from
 */
function saveThePrisoner(n, m, s) {
  return ((m + s - 2) % n) + 1;
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
