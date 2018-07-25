/*
Write a function that will take a linked list and zipper its nodes. It will rearrange the LL so that all its odd 'indexed' nodes appear first and all its even 'indexed' nodes appear last.

ex: a->b->c->d becomes a->c->b->d
Space: O(1)
Time: O(n)
*/

function Node(value){
    this.value = value
    this.next = null
}

Node.prototype.addToLL = function(...values){
    let currentNode = this

    values.forEach(value => {
        currentNode.next = new Node(value)
        currentNode = currentNode.next
    })
}

const zipperingNodes = (head) => {
    if (!head) return null
    if (!head.next) return head

    let oddLL = head,
        evenLL = head.next,
        currentOddNode = oddLL,
        currentEvenNode = evenLL

    while (currentOddNode.next && currentEvenNode.next){
        currentOddNode.next = currentOddNode.next.next
        currentEvenNode.next = currentEvenNode.next.next

        currentOddNode = currentOddNode.next
        currentEvenNode = currentEvenNode.next
    }

    currentOddNode.next = evenLL
    return oddLL
}

let test1 = new Node(0)
test1.addToLL(1, 0, 1, 0)
console.log(zipperingNodes(test1))  // 0 -> 0 -> 0 -> 1 -> 1

let test2 = new Node(0)
test2.addToLL(1, 0, 1)
console.log(zipperingNodes(test2))  // 0 -> 0 -> 1 -> 1

console.log(zipperingNodes(null))  // null
