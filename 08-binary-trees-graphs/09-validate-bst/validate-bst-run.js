const { Node, isValidBST } = require('./validate-bst');

// Create the binary tree:
//       8
//      / \
//     4   10
//    / \
//   2   6

const tree1 = new Node(8);
tree1.left = new Node(4);
tree1.left.left = new Node(2);
tree1.left.right = new Node(6);
tree1.right = new Node(10);


//      10
//     /  \
//    9    12
//        /  \
//      11   16
//          /
//        15
//       /
//     13
//       \
//       14

const tree2 = new Node(10);
tree2.left = new Node(9);
tree2.right = new Node(11);
// tree2.right.left = new Node(11);
tree2.right.right = new Node(16);
tree2.right.right.left = new Node(15);
tree2.right.right.left.left = new Node(13);
tree2.right.right.left.left.right = new Node(14);

// Create the binary tree:
//       8
//      / \
//     4   10
//    / \
//   3   5

const tree3 = new Node(8);
tree3.left = new Node(4);
tree3.left.left = new Node(3);
tree3.left.right = new Node(5);
tree3.right = new Node(10);

const isValid = isValidBST(tree2);

console.log({ isValid });
