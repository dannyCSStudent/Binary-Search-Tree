const binaryTree = require('./binaryTree');

describe('#buildTree(array)', () => {
    test('Takes an array and builds a balanced binary tree of nodes and returns the root node', () => {
        const array = [1, 2, 3, 4, 5]
        const tree = new binaryTree(array);
    
        
        expect(tree.root.value).toBe(3)

    })
})
describe('#insert(value, root = this.root)', () => {
    test('inserts a new node to the tree.', () => {
        const array = [1, 2, 3, 4, 5]
        const tree = new binaryTree(array);
        tree.insert(6);

        expect(tree.root.left.value).toBe(1);
        expect(tree.root.right.value).toBe(4);
        expect(tree.root.right.right.right.value).toBe(6);



    })
})