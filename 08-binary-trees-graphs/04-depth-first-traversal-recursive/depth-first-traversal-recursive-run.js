const { Node, recDepthFirstTraversal } = require('./depth-first-traversal-recursive');

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.setLeftNode(b);
a.setRightNode(c);
b.setLeftNode(d);
b.setRightNode(e);
c.setLeftNode(f);

const results = recDepthFirstTraversal(a);

console.log(results);