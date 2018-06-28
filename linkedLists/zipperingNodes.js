const fastAndSlowRunners = head => {
    let slowPointer = head,
        fastPointer = head

    do {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next

        if (fastPointer === null) fastPointer = head

    } while (fastPointer !== head)

    return {slowPointer, fastPointer}

}

/*
Space: O(1)
Time: O(n)
*/

const zipperingNode = head => {
    let { slowPointer, fastPointer } = fastAndSlowRunners(head),
        insertedNode

    while (slowPointer){
        insertedNode = slowPointer
        slowPointer = slowPointer.next
        insertedNode.next = fastPointer.next
        fastPointer.next = insertedNode

        fastPointer = fastPointer.next.next
    }

    insertedNode.next = null

    return head
}


let head = new Node(0)
head.next = new Node(0)
head.next.next = new Node(0)
head.next.next.next = new Node(0)
head.next.next.next.next = new Node(1)
head.next.next.next.next.next = new Node(1)
head.next.next.next.next.next.next = new Node(1)
head.next.next.next.next.next.next.next = new Node(1)

head = zipperingNode(head)
console.log(head)