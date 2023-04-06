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
    delete(value, root = this.root) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.delete(value, root.left);
        } else if (value > root.value) {
            root.right = this.delete(value, root.right);
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            } 
            root.value = this.minValue(root.right)
            root.right = this.delete(root.value, root.right)
        }
        return root;
    }

    minValue(root) {
        let min = root.value;
        while (root.left !== null) {
            min = root.left.value;
            root = root.left;
        }
        return min;
    }

    find(value, root = this.root) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            return this.find(value, root.left);
            
        } else if (value > root.value) {
            return this.find(value, root.right);
        } else {
            return root;
        }
    }

    queue = new Queue(Node);
    queueArray = []

    pushOut() { 
        const innerArray = []
        let n = this.queue.size();    
        for (let i = 0; i < n; i++) {
            const node = this.queue.dequeue(); 
            if (node.left !== null) {
                this.queue.enqueue(node.left)
                innerArray.push(node.left.value)
            }
            if (node.right !== null) {
                this.queue.enqueue(node.right)
                innerArray.push(node.right.value)
            }
        }
        if (this.queue.size() === 0) {
            return;
        }
        this.queueArray.push(innerArray);
        this.pushOut();
    }

    levelOrder(pushOut = this.root) {
        if (this.root === null) {
            return;
        }
        this.queue.enqueue(this.root);
        this.queueArray.push([this.root.value]);
        this.pushOut();
        return this.queueArray;
    }

    inorder(root = this.root, arr = []) {
        if (root === null) {
            return;
        }
        this.inorder(root.left, arr)
        arr.push(root.value);
        this.inorder(root.right, arr)
        return arr
    }

    preorder(root = this.root, arr = []) {
        if (root === null) {
            return;
        }
        arr.push(root.value);
        this.inorder(root.left, arr)
        this.inorder(root.right, arr)
        return arr

    }

    postorder(root = this.root, arr = []) {
        if (root === null) {
            return;
        }
        this.inorder(root.left, arr)
        this.inorder(root.right, arr)
        arr.push(root.value)
        return arr
    }

    height(root = this.root) {
        if (root === null) {
            return 0;
        }
        return Math.max(this.height(root.left), this.height(root.right)) + 1;
    }

    depth(x, root = this.root) {
        if (root === null) {
            return -1;
        }
        let dist = -1;
        if ((root.value === x) || (dist = this.depth(x, root.left)) >= 0 || (dist = this.depth(x, root.right)) >= 0) {
            return dist + 1;
        }
        return dist;
    }

    isBalanced(root = this.root) {
        if(root === null) {
            return true
        }
        let lh = this.height(root.left)
        let rh = this.height(root.right)
        if (
            Math.abs(lh - rh) <= 1 && 
            this.isBalanced(root.left) === true && 
            this.isBalanced(root.right) === true) {
                return true;
        }
        return false;
    }

    myArray = []
    rebalanced(root = this.root) {
        if (root === null) {
            return
        }
        this.myArray.push(root.value)
        this.rebalanced(root.left)
        this.rebalanced(root.right)
        const rootNode = this.buildTree(this.myArray);
        return rootNode;
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
    size() {
        return this.backIndex - this.frontIndex;
    }

}






module.exports = BinaryTree;