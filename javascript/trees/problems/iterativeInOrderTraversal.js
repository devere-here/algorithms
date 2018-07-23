/*
Write a function that can traverse a tree using in-order traversal without recursion.
Time: O(n + lh) - where lh is the height of the longest chain of nodes with non-null left pointers and n is the number of nodes
Space: O(h + n) - where h is the height of the tree and n is the number of nodes in it
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


const iterativeInOrderTraversal = (tree, callback) => {
    let currentNode = tree,
        ancestorStack = [],
        usedValueStack = []

    while (currentNode){
        if (currentNode.left && usedValueStack.indexOf(currentNode.left) === -1){
            ancestorStack.push(currentNode)
            currentNode = currentNode.left
            continue
        }
        callback(currentNode)
        usedValueStack.push(currentNode)

        if (currentNode.right){
            currentNode = currentNode.right
        } else if (ancestorStack.length){
            currentNode = ancestorStack.pop()
        } else {
            currentNode = null
        }
    }

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

function logIt(node){
    console.log(node.value)
}
