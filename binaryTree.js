class BinaryTree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    buildTree(array, start = 0, end = array.length - 1) {
        if (start > end) {
            return null;
        }
        const mid = Math.floor((start + end) / 2);
        const left = this.buildTree(array, start, mid - 1);
        const right = this. buildTree(array, mid + 1, end);
        const root = new Node(array[mid], left, right);
        return root;
    }

    insert(value, root = this.root) {
        if (root === null) {
            this.root = new Node(value, null, null);
        }
        if (value < root.value) {
            if (root.left === null) {
                root.left = new Node(value, null, null);
                return;
            } else if (root.left !== null) {
                return this.insert(value, root.left);
            }
        } else if (value > root.value) {
            if (root.right === null) {
                root.right = new Node(value, null, null);
                return;
            } else if (root.right !== null) {
                return this.insert(value, root.right);
            }    
        } else {
            return null;
        }
    }
    prettyPrint = (node, prefix = '', isLeft = true) => {
        if (node === null) {
           return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }

}

class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Queue {
    constructor() {
        this.items = [];
        this.frontIndex = 0;
        this.backIndex = 0;
    }
    enqueue(item) {
        this.items[this.backIndex] = item;
        this.backIndex++;
    }
    dequeue() {
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item;
    }

}






module.exports = BinaryTree;