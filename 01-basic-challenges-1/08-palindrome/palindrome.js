const reverseString = require("../07-reverse-string/reverse-string");

function isPalindrome(str) {
  const sanitizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return reverseString(sanitizedStr) === sanitizedStr;
}

module.exports = isPalindrome;
