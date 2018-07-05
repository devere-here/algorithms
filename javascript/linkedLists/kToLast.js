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
}

const kToLast = (head, k) => {
    let firstPointer = head,
        secondPointer = head

    for (let i = 0; i < k; i++) {
        if (secondPointer) secondPointer = secondPointer.next
    }

    if (!secondPointer) return head.next

    while (secondPointer.next){
        secondPointer = secondPointer.next
        firstPointer = firstPointer.next
    }

    firstPointer.next = firstPointer.next.next

    return head
}

let head = new Node(1)
head.bulkAddToLL([2, 3, 4, 5, 6, 7, 8, 9])

head = kToLast(head, 9)
console.log(head)
