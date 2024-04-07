const TreeNode = require('./tree-node-class');

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");
const g = new TreeNode("g");

// root
a.setLeftNode(b);
a.setRightNode(c);

// left branch
b.setLeftNode(d);
b.setRightNode(e);

// right branch
c.setLeftNode(f);
c.setRightNode(g);

console.log({ a });