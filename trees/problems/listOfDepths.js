/*
Given a binary search tree, design an algorithm which creates a linked list of all the
nodes at each depth (i.e., if you have a tree with depth D, you’ll have D linked lists).
*/

function LLNode(value){
    this.value = value
    this.next = null
}

function LinkedList(value){
    this.head = new LLNode(value)
}

const listOfDepths = (node, depth = 0, llArr = []) => {

    if (!llArr[depth]){
        llArr[depth] = new LinkedList(node.value)
    } else {
        let temp = llArr[depth].head
        llArr[depth].head = new LLNode(node.value)
        llArr[depth].head.next = temp
    }

    if (node.left) listOfDepths(node.left, depth + 1, llArr) 
    if (node.right) listOfDepths(node.right, depth + 1, llArr)

    return llArr
}
