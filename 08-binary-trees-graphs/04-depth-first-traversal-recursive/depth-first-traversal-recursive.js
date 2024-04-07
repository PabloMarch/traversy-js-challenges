class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  setLeftNode = (node) => {
    this.left = node;
  }

  setRightNode = (node) => {
    this.right = node;
  }
}

function traverse (node) {
  if (!node) return [];

  const results = [node.data];
  
  if (node.left) {
    results.push(...traverse(node.left));
  }

  if (node.right) {
    results.push(...traverse(node.right));
  }

  return results;
}

function recDepthFirstTraversal(root) {
  return [...traverse(root)];
}

module.exports = {
  Node,
  recDepthFirstTraversal,
};
