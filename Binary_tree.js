class Node {
    constructor(_data) {
        this.data = _data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class BinarySearchTree {

    constructor(_data) {
        this.root = new Node(_data);
    }

    search(data, node = this.root) {
        if (data === node.data) {
            return node;
        } else {
            return this.search(data, data > node.data ? node.rightChild : node.leftChild);
        }
    }

    add(data, node = this.root) {
        if (data > node.data) {
            if (!node.rightChild) {
                node.rightChild = new Node(data);
            } else {
                this.add(data, node.rightChild);
            }
        } else if (data < node.data) {
            if (!node.leftChild) {
                node.leftChild = new Node(data);
            } else {
                this.add(data, node.leftChild);
            }
        }
    }

    remove(data) {
        const getSuccessorNode = (targetNode) => {
            let successor = targetNode.rightChild;
            let successorParent = null;
            while (successor.leftChild) {
                successorParent = successor;
                successor = successor.leftChild;
            }

            successorParent.leftChild = successor.rightChild ? successor.rightChild : null;

            return successor;
        };

        let parent = null;
        let current = this.root;

        while (data !== current.data) {
            parent = current;
            if (data < current.data) {
                current = current.leftChild;
            } else if (current.data < data) {
                current = current.rightChild;
            }
        }

        if (!current.leftChild && !current.rightChild) {
            parent.leftChild.data === current.data ? parent.leftChild = null : parent.rightChild = null;
        } else if (current.leftChild && !current.rightChild) {
            current = current.leftChild;
            parent.leftChild.data === current.data ? parent.leftChild = current : parent.rightChild = current;
        } else if (!current.leftChild && current.rightChild) {
            current = current.rightChild;
            parent.leftChild.data === current.data ? parent.leftChild = current : parent.rightChild = current;
        } else if (current.leftChild && current.rightChild) {
            const successorNode = getSuccessorNode(current);
            const currentLeftChildTemp = current.leftChild;
            const currentRightChildTemp = current.rightChild;
            current = successorNode;
            current.leftChild = currentLeftChildTemp;
            current.rightChild = currentRightChildTemp;
            if (!parent) {
                this.root = current;
            } else {
                console.log(parent)
            }
        }
    };
}