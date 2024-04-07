class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  setLeftNode = (left) => {
    this.left = left;
  }

  setRightNode = (right) => {
    this.right = right;
  }
}

module.exports = TreeNode;
