/*

A binary search tree was created by traversing through an array from left to right and inserting each element. Given a BST with
distinct elements print all the possible arrays that could've led to this tree

Time: To be honest I don't know. It involves a factorial though. I would guess O(n!) where n is the number of nodes in the tree.
We are finding all the permutations of an array of length n that match a certain criteria.

Space: O(n!) - same as time

*/

function Node(value){
    this.value = value
    this.left = null
    this.right = null
}

function arraysThatLedToThisTree(node, currentArray = [], nextInLineArray = [node], collectionOfArrays = []){
    currentArray.push(node.value)
    nextInLineArray = nextInLineArray.filter(elem => elem !== node)

    if (node.left) nextInLineArray.push(node.left)
    if (node.right) nextInLineArray.push(node.right)

    if (nextInLineArray.length === 0){
        collectionOfArrays.push(currentArray)
    } else {
        nextInLineArray.forEach(nextNode => {
            arraysThatLedToThisTree(nextNode, currentArray.slice(0), nextInLineArray, collectionOfArrays)
        })
    }

    return collectionOfArrays
}

let head = new Node(5)
head.left =  new Node(3)
head.right =  new Node(9)
//head.right =  new Node(7)

console.log(arraysThatLedToThisTree(head))  // [[5, 3, 9], [5, 9, 3]]

let head2 = new Node(100)
head2.left = new Node(50)
head2.right = new Node(150)
head2.left.left = new Node(25)
head2.left.right = new Node(75)
// head2.right.left = new Node(125)
// head2.right.right = new Node(175)

console.log(arraysThatLedToThisTree(head2)) // 8 different combinations
