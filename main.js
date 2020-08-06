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

// Our dice pics
// Single d6
const d6 = document.querySelector('#d6 roll');

// Double d6
const d6_1 = document.querySelector('#double-d6-roll-1');
const d6_2 = document.querySelector('#double-d6-roll-1');

// Single d12
const d12 = document.querySelector('#d12-roll');

// Single d20
const d20 = document.querySelector('#d20');

/*******************
 * DICE ROLLERS *
 *******************/
// Rollers - These functions will:
// 1. Calculate a random number from 1 - max
// 2. Change the image of the dice roll 
// 3. Add the result of the dice roll into its respective array

// Universal function for die rolls, might not be used
const roll = function(max, sides, amount) {
  // 1. Check the amount of sides. The result decides the image directory
  // 2a. If equal to six, we're working in the d6 image directory
  // 2b. Otherwise, we're working in the numbers directory
  // 3. 

}



/*******************
 * EVENT LISTENERS *
 *******************/

/******************
 * RESET FUNCTION *
 ******************/
// Resets EVERYTHING
// 1. Empties all four global arrays
// 2. Changes the dice buttons back to their starting images
// 3. Changes the text in our mean/median/mode text areas to nothing
const reset = function() {
  
}

/****************
 * MATH SECTION *
 ****************/
