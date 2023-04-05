const binaryTree = require('./binaryTree');

const array = [1, 2, 3, 4, 5]
const tree = new binaryTree(array); 
console.log(tree.inorder())
console.log(tree.preorder())
console.log(tree.height())
tree.prettyPrint(tree.root)