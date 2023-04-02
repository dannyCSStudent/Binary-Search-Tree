const binaryTree = require('./binaryTree');

const array = [1, 2, 3, 4, 5]
const tree = new binaryTree(array); 
tree.insert(6)
tree.prettyPrint(tree.root)