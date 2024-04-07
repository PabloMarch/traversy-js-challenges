class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(
  root,
  rangeMin = Number.MIN_SAFE_INTEGER,
  rangeMax = Number.MAX_SAFE_INTEGER
) {
  if (!root) return true;

  console.log({ node: root.value, rangeMin, rangeMax });

  if (root.value < rangeMin || root.value > rangeMax) return false;

  // update the range for the left subtree
  let left = isValidBST(root.left, rangeMin, root.value - 1);
  
  // update the range for the right subtree
  let right = isValidBST(root.right, root.value + 1, rangeMax);

  return left && right;
}


module.exports = { Node, isValidBST };
