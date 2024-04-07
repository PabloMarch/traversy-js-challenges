const Stack = require('./stack');

class Node {
  constructor(data) {
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

function depthFirstTraversal(root) {
  if (!root) return [];

  const stack = new Stack(100);
  const results = new Array();

  stack.push(root);

  while(!stack.isEmpty()) {
    const current = stack.pop();

    console.log({ stack });

    results.push(current.data);

    if(current.right) {
      stack.push(current.right);
    }

    if(current.left) {
      stack.push(current.left);
    }
  }

  return results;
}

module.exports = {
  Node,
  depthFirstTraversal,
};
