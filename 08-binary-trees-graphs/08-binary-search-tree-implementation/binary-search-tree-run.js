const { Node, BinarySearchTree } = require('./binary-search-tree');

// Create a binary search tree:
//       10
//      /  \
//     5    15
//    /    /  \
//   2    11   17

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(17);
bst.insert(11);

bst.printTree();
bst.remove(10);
bst.printTree();

const lookedUpNode = bst.lookup(11);
console.log({ lookedUpNode });