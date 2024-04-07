function findMaxNumber(numbs) {
  let maxNumber = -Infinity;
  for (const num of numbs) {
    maxNumber = maxNumber > num ? maxNumber : num;
  }
  return maxNumber;
}

function findMaxNumberAlt(numbs) {
  // return numbs.reduce((max, num) => Math.max(max, num), -Infinity);
  // return numbs.slice().sort((a,b) => b-a)[0];
  return [...numbs].sort((a,b) => b-a)[0];
}

// Notes:
// (-Infinity) as the initial value ensures it starts with
// a value lower than any possible number in the array.

module.exports = findMaxNumberAlt;
