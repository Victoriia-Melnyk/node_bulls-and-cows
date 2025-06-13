'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 * Assume that the user input and the number to guess
 * are always 4-digit numbers.
 *
 * @param {number} userInput - The user input
 * @param {number} numberToGuess - The number to guess
 * @return {object} An object containing the number of bulls and cows.
 * Example: { bulls: 1, cows: 2 }
 */
function getBullsAndCows(userInput, numberToGuess) {
  const inputArray = userInput.toString().split('');
  const guessArray = numberToGuess.toString().split('');

  const matchedInput = Array(4).fill(false); // Marks bulls/cows in user input
  const matchedGuess = Array(4).fill(false); // Marks bulls/cows in target

  let bulls = 0;
  let cows = 0;

  // First pass: find bulls
  for (let i = 0; i < 4; i++) {
    if (inputArray[i] === guessArray[i]) {
      bulls++;
      matchedInput[i] = true;
      matchedGuess[i] = true;
    }
  }

  // Second pass: find cows
  for (let i = 0; i < 4; i++) {
    if (matchedInput[i]) continue; // already a bull

    for (let j = 0; j < 4; j++) {
      if (!matchedGuess[j] && inputArray[i] === guessArray[j]) {
        cows++;
        matchedGuess[j] = true;
        break;
      }
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
