const binaryTree = require('./binaryTree');

const array = [1, 2, 3, 4, 5, 6]
const tree = new binaryTree(array); 
tree.prettyPrint(tree.root)
console.log(tree.isBalanced())      // returns true
console.log(tree.levelOrder())      // returns (3) [Array(1), Array(2), Array(3)]
console.log(tree.inorder())         // returns (6) [1, 2, 3, 4, 5, 6]
console.log(tree.preorder())        // returns (6) [3, 1, 2, 4, 5, 6]
console.log(tree.postorder())       // returns (6) [1, 2, 4, 5, 6, 3]
tree.insert(32);
tree.insert(36);
tree.insert(37);
tree.insert(38);
tree.insert(39);
tree.prettyPrint(tree.root)
console.log(tree.isBalanced())      // returns false

tree.prettyPrint(tree.rebalanced())