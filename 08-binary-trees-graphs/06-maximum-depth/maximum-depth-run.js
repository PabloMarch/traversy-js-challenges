const { Node, maxDepth } = require('./maximum-depth');

// Create the binary tree:    3
//                           / \
//                          9  20
//                             / \
//                            15  7
//                               / \
//                              8  10
//                             /
//                            11

const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);
root.right.right.left = new Node(8);
root.right.right.left.left = new Node(11);
root.right.right.right = new Node(10);

const result = maxDepth(root);

console.log({ result });