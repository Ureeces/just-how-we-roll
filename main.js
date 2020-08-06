/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/********************
 * HELPER FUNCTIONS *
********************/

// Generates a random number from 1 - max
const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

// Sorts an array in ascending order
const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

// Our dice pics, and our mean, median, and mode
// Single d6
const d6 = document.querySelector('#d6-roll');
const d6Mean = document.querySelector('#d6-rolls-mean');
const d6Median = document.querySelector('#d6-rolls-median');
const d6Mode = document.querySelector('#d6-rolls-mode');

// Double d6
const d6_1 = document.querySelector('#double-d6-roll-1');
const d6_2 = document.querySelector('#double-d6-roll-2');
const dd6Mean = document.querySelector('#double-d6-rolls-mean');
const dd6Median = document.querySelector('#double-d6-rolls-median');
const dd6Mode = document.querySelector('#double-d6-rolls-mode');

// Single d12
const d12 = document.querySelector('#d12-roll');
const d12Mean = document.querySelector('#d12-rolls-mean');
const d12Median = document.querySelector('#d12-rolls-median');
const d12Mode = document.querySelector('#d12-rolls-mode');

// Single d20
const d20 = document.querySelector('#d20-roll');
const d20Mean = document.querySelector('#d20-rolls-mean');
const d20Median = document.querySelector('#d20-rolls-median');
const d20Mode = document.querySelector('#d20-rolls-mode');

d6.src = './images/start/d6.png';
d6_1.src = './images/start/d6.png';
d6_2.src = './images/start/d6.png';
d12.src = './images/start/d12.jpeg';
d20.src = './images/start/d20.jpg';

// Reset Button
const resetButton = document.querySelector('#reset-button');

/*******************
 * EVENT LISTENERS *
 *******************/
/*******************
 * DICE ROLLERS *
 *******************/
// Rollers - These functions will:
// 1. Calculate a random number from 1 - max
// 2. Change the image of the dice roll 
// 3. Add the result of the dice roll into its respective array

const rolld6 = function() {
  // Roll the result
  const result = getRandomNumber(6);
  
  // Change the image
  d6.src = `./images/d6/${result}.png`;

  // Add the result to its array
  sixes.push(result);

  // Get the Mean, Median, and Mode, then set the HTML
  const mean = getMean(sixes);
  d6Mean.innerText = mean;

  const median = getMedian(sixes);
  d6Median.innerText = median;

  const mode = getMode(sixes);
  d6Mode.innerText = mode;

  return result;
}

const roll2d6 = function() {
  // Roll the result
  const result1 = getRandomNumber(6);
  const result2 = getRandomNumber(6);
  const result = result1 + result2;

  // Change the images
  d6_1.src = `./images/d6/${result1}.png`;
  d6_2.src = `./images/d6/${result2}.png`;

  // Add the result to its array
  doubleSixes.push(result);

  // Get the Mean, Median, and Mode, then set the HTML
  const mean = getMean(doubleSixes);
  dd6Mean.innerText = mean;

  const median = getMedian(doubleSixes);
  dd6Median.innerText = median;

  const mode = getMode(doubleSixes);
  dd6Mode.innerText = mode;

  return result;
}

const rolld12 = function() {
  // Roll the result
  const result = getRandomNumber(12);

  // Change the image
  d12.src = `./images/numbers/${result}.png`;

  // Add the result to its array
  twelves.push(result);

  // Get the Mean, Median, and Mode, then set the HTML
  const mean = getMean(twelves);
  d12Mean.innerText = mean;

  const median = getMedian(twelves);
  d12Median.innerText = median;

  const mode = getMode(twelves);
  d12Mode.innerText = mode;

  return result;
}

const rolld20 = function() {
  // Roll the result
  const result = getRandomNumber(20);

  // Change the image
  d20.src = `./images/numbers/${result}.png`;

  // Add the result to its array
  twenties.push(result);

  // Get the Mean, Median, and Mode, then set the HTML
  const mean = getMean(twenties);
  d20Mean.innerText = mean;

  const median = getMedian(twenties);
  d20Median.innerText = median;

  const mode = getMode(twenties);
  d20Mode.innerText = mode;

  return result;
}

d6.addEventListener('click', rolld6);

d6_1.addEventListener('click', roll2d6);
d6_2.addEventListener('click', roll2d6);

d12.addEventListener('click', rolld12);

d20.addEventListener('click', rolld20);

/******************
 * RESET FUNCTION *
 ******************/
// Resets EVERYTHING
// 1. Empties all four global arrays
// 2. Changes the dice buttons back to their starting images
// 3. Changes the text in our mean/median/mode text areas to nothing
const reset = function() {
  // Empty the Arrays
  sixes.splice(0, sixes.length);
  doubleSixes.splice(0, sixes.length);
  twelves.splice(0, sixes.length);
  twenties.splice(0, sixes.length);

  // Reset the images
  d6.src = './images/start/d6.png';
  d6_1.src = './images/start/d6.png';
  d6_2.src = './images/start/d6.png';
  d12.src = './images/start/d12.jpeg';
  d20.src = './images/start/d20.jpg';

  // Changes mean, median, mode to nothing
  // d6
  d6Mean.innerText = 'N/A';
  d6Median.innerText = 'N/A';
  d6Mode.innerText = 'N/A';
  // 2d6
  dd6Mean.innerText = 'N/A';
  dd6Median.innerText = 'N/A';
  dd6Mode.innerText = 'N/A';
  // d12
  d12Mean.innerText = 'N/A';
  d12Median.innerText = 'N/A';
  d12Mode.innerText = 'N/A';
  // d20
  d20Mean.innerText = 'N/A';
  d20Median.innerText = 'N/A';
  d20Mode.innerText = 'N/A';
}

resetButton.addEventListener('click', reset);

/****************
 * MATH SECTION *
 ****************/
// Determines Mean
 const getMean = function(arr) {
  if(arr.length === 0) {
    return 0;
  }

  let total = 0;
  const numsInArray = arr.length;
  
  for(const num of arr) {
    total += num;
  }

  const avg = total / numsInArray;
  return avg.toFixed(2);
}

const getMedian = function(arr) {
  if(arr.length === 1) {
    return arr[0];
  }

  const sortedArr = sortByNumber(arr);
  const len = arr.length;
  
  const mid = Math.ceil(len / 2);
  const median = 
    len % 2 === 0 ? (sortedArr[mid] + sortedArr[mid - 1]) / 2 : sortedArr[mid];

  return median;
}

const getMode = function(arr) {
  if(arr.length === 0) {
    return arr[0];
  }

  const numCounts = {};

  for(const num of arr) {
    numCounts[num] = numCounts[num] + 1 || 1;
  }

  let modeKey = -1;
  let modeValue = -1;

  for(const num in numCounts) {
    if(numCounts[num] > modeValue) {
      modeKey = num;
      modeValue = numCounts[num];
    }
  }

  return modeKey;
}