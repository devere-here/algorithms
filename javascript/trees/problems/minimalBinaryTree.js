/*
Given a sorted (increasing order) array, write an algorithm to create a binary tree with
minimal height.
*/

function Node(value){
    this.value = value
    this.left = null
    this.right = null
}

const minimalBinaryTree = (arr, start = 0, end = arr.length - 1) => {

    let mdpt = Math.floor((end + start) / 2),
        node = new Node(arr[mdpt])

    if (start < end){
        node.left = minimalBinaryTree(arr, start, mdpt - 1)
        node.right = minimalBinaryTree(arr, mdpt + 1, end)
    }

    return node
}


module.exports = minimalBinaryTree
