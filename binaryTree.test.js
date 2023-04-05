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
describe('#delete(value, root = this.root)', () => {
    test('delets the node with the provided value.', () => {
        const array = [1, 2, 3, 4, 5]
        const tree = new binaryTree(array);
        tree.delete(3);

        expect(tree.root.value).toBe(4)
    })
})
describe('#find(value, root = this.root)', () => {
    test('finds the value provided and returns that node.', () => {
        const array = [1, 2, 3, 4, 5]
        const tree = new binaryTree(array);
        tree.find(3)

        expect(tree.root.value).toBe(3)
    })
})
describe('#levelOrder(pushOut = this.root)', () => {
    test('returns an array of arrays of each level in the tree', () => {
        const array = [1, 2, 3, 4, 5]
        const tree = new binaryTree(array);
        const expected = [[3], [1, 4], [2, 5]]

        expect(tree.levelOrder(array)).toMatchObject(expected)

    })
})
describe('#inorder(root = this.root, arr = [])', () => {
    test('left child nodes visited first, followed by the root, and then the right childs.', () => {
        const array = [1, 2, 3, 4, 5]
        const tree = new binaryTree(array);
        const expected = [1, 2, 3, 4, 5]

        expect(tree.inorder()).toMatchObject(expected)
    })   
})
describe('#preorder(root = this.root, arr = [])', () => {
    test('root node will be traversed first and then it will traverse the left subtree followed by the right subtree.', () => {
        const array = [1, 2, 3, 4, 5]
        const tree = new binaryTree(array);
        const expected = [3, 1, 2, 4, 5]

        expect(tree.preorder()).toMatchObject(expected)
    })
})
describe('#postorder(root = this.root, arr = [])', () => {
    test('traverse the left node, then right node, and then root.', () => {
        const array = [1, 2, 3, 4, 5]
        const tree = new binaryTree(array);
        const expected = [1, 2, 4, 5, 3]

        expect(tree.postorder()).toMatchObject(expected)
    })
})
describe('#height(root = this.root)', () => {
    test('returns the height of the tree.', () => {
        const array = [1, 2, 3, 4, 5]
        const tree = new binaryTree(array);

        expect(tree.height()).toBe(3)
    })
})
describe('#depth(x, root = this.root)', () => {
    test('returns the depth of the provided node.', () => {
        const array = [1, 2, 3, 4, 5]
        const tree = new binaryTree(array);

        expect(tree.depth(5)).toBe(2);
    })
})
describe('#isBalanced(root = this.root)', () => {
    test('returns true if the tree is balanced, false otherwise.', () => {
        const array = [1, 2, 3, 4, 5];
        const tree = new binaryTree(array);

        expect(tree.isBalanced()).toBe(true);
    })
})