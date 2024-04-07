function countVowels(str) {
  return str.toLowerCase().match(/[aeiou]/g).length;
}

module.exports = countVowels;
