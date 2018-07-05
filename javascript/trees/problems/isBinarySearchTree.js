/*
Implement a function that checks whether a binary tree is a binary search tree
*/

function Node(value){
    this.value = value
    this.left = null
    this.right = null
}

Node.prototype.insert = function(value){

    if (value < this.value){
        if (this.left) this.left.insert(value)
        else this.left = new Node(value)
    } else if (this.right){ 
        this.right.insert(value)
    } else {
        this.right = new Node(value)
    }

}
/*
Space: O(1)
Time: O(n)
*/

const isBinarySearchTree = node => {

    if (!node) return true

    if (isBinarySearchTree(node.left) && isBinarySearchTree(node.right)){
        if ((!node.left || node.value > node.left.value) && (!node.right || node.value <= node.right.value)){
            return true
        }
    }

    return false
}

let head1 = new Node(10)
head1.insert(5)
head1.insert(15)
head1.insert(25)
head1.insert(35)
head1.insert(20)
head1.insert(50)

let head2 = new Node(100)
head2.insert(50)
head2.insert(150)
head2.insert(25)
head2.insert(75)
head2.insert(125)
head2.insert(175)
head2.left.left.left = new Node(400)

console.log(isBinarySearchTree(head1))
console.log(isBinarySearchTree(head2))
