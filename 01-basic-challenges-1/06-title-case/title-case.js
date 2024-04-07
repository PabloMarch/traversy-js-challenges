function titleCase(str) {
  let casedTitle = "";

  str
    .split(" ")
    .forEach((word) => {
      casedTitle += `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()} `;
    });

  return casedTitle.trim();
}

function titleCaseAlt(str) {
  return str
    .toLowerCase()
    .split(" ")
    .reduce((title, word) => title += `${word[0].toUpperCase()}${word.slice(1)} `, "")
    .trim();
}

module.exports = titleCaseAlt;
