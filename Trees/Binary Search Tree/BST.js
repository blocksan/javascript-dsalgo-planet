/**
 * Binary Search Trees
 * BST, always has tree invariant that specifies always LEFT child will be less than the ROOT and RIGHT child
 * Time complexity can be measured on two things, either it can be Number of items in the tree or height of the tree.
 * N = Number of nodes/vertices in a truee
 * h = height of the tree
 * Big O 
 * Insertion        -       O(logN) |   O(h)
 * Traversal        -       O(N)    |   O(h)
 * Search           -       O(logN) |   O(h) 
 */
/**
 * Node that holds the single leaf
 */
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}

/**
 * BST data structure
 */
class BST{
    constructor(){
        this.root = null
    }

    /**
     * insert item to the BST
     */
    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode
        }else{
            let currentNode = this.root
            while(true){
                if(newNode.value > currentNode.value){
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }else{
                        currentNode = currentNode.right
                    }
                }
                else if(newNode.value <= currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }else{
                        currentNode = currentNode.left
                    }
                }
            }
        }
    }

    /**
     * Traversal can be of different types
     * POSTORDER traversal      -   Left Right Root 
     * INORDER traversal        -   Left Root Right
     * PREORDER traversal       -   Root Left Right
     */
    /**
     * INORDER traversal of the tree
     */
    inorder(){
        let inorderArray = []
        let currentNode = this.root;
        inorderHelper(currentNode, inorderArray);
        return inorderArray
    }

    /**
     * POSTORDER traversal of the tree
     */
    postorder(){
        let postorderArray = []
        let currentNode = this.root;
        postorderHelper(currentNode, postorderArray);
        return postorderArray
    }

    /**
     * PREORDER traversal of the tree
     */
    preorder(){
        let preorderArray = []
        let currentNode = this.root;
        preorderHelper(currentNode, preorderArray);
        return preorderArray
    }

}

/**
 * Preorder helpder function - Root Left Right
 * Recursive helper function which gets called recursively to traverse the tree
 * @param {Node} node       current node of the tree
 * @param {Array} array     array which contains all the traversed element from the tree
 */
const preorderHelper = (node, array) =>{
    array.push(node.value)
    if(node.left){
        preorderHelper(node.left, array)
    }
    if(node.right){
        preorderHelper(node.right, array)
    }
}

/**
 * Postorder helpder function - Left Right Root
 * Recursive helper function which gets called recursively to traverse the tree
 * @param {Node} node       current node of the tree
 * @param {Array} array     array which contains all the traversed element from the tree
 */
const postorderHelper = (node, array) =>{
    if(node.left){
        postorderHelper(node.left, array)
    }
    if(node.right){
        postorderHelper(node.right, array)
    }
    array.push(node.value)
}

/**
 * Inorder helpder function - Left Root Right
 * Recursive helper function which gets called recursively to traverse the tree
 * @param {Node} node       current node of the tree
 * @param {Array} array     array which contains all the traversed element from the tree
 */
const inorderHelper = (node, array) =>{
    if(node.left){
        inorderHelper(node.left, array)
    }
    array.push(node.value)
    if(node.right){
        inorderHelper(node.right, array)
    }
}

const tree = new BST()
tree.insert(10)
tree.insert(5)
tree.insert(7)
tree.insert(20)
tree.insert(15)
tree.insert(30)
console.log("########PREORDER########")
console.log(tree.preorder())

console.log("########POSTORDER########")
console.log(tree.postorder())

console.log("########INORDER########")
console.log(tree.inorder())