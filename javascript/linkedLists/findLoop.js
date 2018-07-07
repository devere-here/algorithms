/*
This function takes in the head of a singly linked list that contains a loop. Return the node where the loop originates

Space: O(1) - will only need to create two pointers
Time: O(n) - slowpointer will have to traverse the length of the entire list

*/
let globalTail

function Node(value){
    this.value = value
    this.next = null
}

Node.prototype.bulkAddToLL = function(array){
    let currentNode = this
    array.forEach(value => {
        let newTail = new Node(value)
        currentNode.next = newTail
        currentNode = newTail
    })
    globalTail = currentNode
}


const findLoop = (head) => {
    // Write your code here.
    let fastPointer = head,
        slowPointer = head

    do {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    } while (fastPointer !== slowPointer)

    fastPointer = head

    while (fastPointer !== slowPointer){
        fastPointer = fastPointer.next
        slowPointer = slowPointer.next
    }

    return fastPointer
}

let head1 = new Node(1)
head1.bulkAddToLL([2,3,4,5,6])
globalTail.next = head1.next.next.next

console.log(findLoop(head1))    // returns a node with value = 4
