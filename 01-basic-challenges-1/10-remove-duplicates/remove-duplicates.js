function removeDuplicates(str) {
  return [...new Set(str)];
}

// Old fashion
function removeDuplicatesAlt(str) {
  const uniqueChars = [];
  const seenChars = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!seenChars[char]) {
      uniqueChars.push(char);
      seenChars[char] = true; // Mark as seen
    }
  }

  return uniqueChars;
}

module.exports = removeDuplicates;
