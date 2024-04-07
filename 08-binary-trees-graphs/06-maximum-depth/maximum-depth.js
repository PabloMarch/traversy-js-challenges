class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(tree) {
  if (!tree) return 0;

  const depthLeft = maxDepth(tree.left);
  const depthRight = maxDepth(tree.right);
  const max = Math.max(depthLeft, depthRight) + 1;

  console.log({ d: tree.data, max, dL: depthLeft, dR: depthRight, lD: tree.left?.data, rD: tree.right?.data });
  
  return max;
}

module.exports = {
  maxDepth,
  Node,
};
