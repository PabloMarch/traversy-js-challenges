function reverseString(str) {
  return [...str].reverse().join("");
}

// recursion
function reverseStringAlt(str) {
  if (str.length === 0) {
    return "";
  } else {
    return reverseString(str.slice(1)) + str.charAt(0);
  }
}

module.exports = reverseStringAlt;
