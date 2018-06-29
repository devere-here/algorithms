/**
 * Given an input node within a tree write an algorithm that determines the next node
 * in the in-order traversal pattern
 */


function Node(value, parent){
    this.value = value
    this.parent = parent
    this.left = null
    this.right = null
}

Node.prototype.insert = function(value){

    if (value < this.value){
        if (this.left) this.left.insert(value)
        else this.left = new Node(value, this)
    } else if (this.right){
        this.right.insert(value)
    } else {
        this.right = new Node(value, this)
    }
}

const inOrderSuccessor = node => {

    if (node.right){ return node.right }
    else if (node.parent && (node.value < node.parent.value)){ return node.parent }
    else if (node.parent && (node.value >= node.parent.value)){
        let currentNode = node.parent

        while (currentNode.parent){
            if (currentNode.value <= currentNode.parent.value){
                return currentNode.parent
            }
            currentNode = currentNode.parent
        }
    }
    return null
}


let head1 = new Node(10, null)
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

console.log(inOrderSuccessor(head2.right))
