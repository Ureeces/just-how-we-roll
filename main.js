/**********
 * DATA *
 **********/

const sixes = [1];
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
const resetButton = document.querySelector('reset-button');


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
  const result = getRandomNumber(6);
  

  return result;
}

const roll2d6 = function() {
  const result1 = getRandomNumber(6);
  const result2 = getRandomNumber(6);
  const result = result1 + result2;

  return result;
}

const rolld12 = function() {
  const result = getRandomNumber(12);


  return result;
}

const rolld20 = function() {
  const result = getRandomNumber(20);


  return result;
}

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
  d6Mean.innerText = '&nbsp';
  d6Median.innerText = '&nbsp';
  d6Mode.innerText = '&nbsp';
  // 2d6
  dd6Mean.innerText = '&nbsp';
  dd6Median.innerText = '&nbsp';
  dd6Mode.innerText = '&nbsp';
  // d12
  d12Mean.innerText = '&nbsp';
  d12Median.innerText = '&nbsp';
  d12Mode.innerText = '&nbsp';
  // d20
  d20Mean.innerText = '&nbsp';
  d20Median.innerText = '&nbsp';
  d20Mode.innerText = '&nbsp';
}

/****************
 * MATH SECTION *
 ****************/
