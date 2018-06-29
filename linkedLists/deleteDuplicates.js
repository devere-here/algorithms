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

const deleteDuplicates = head => {
    let hashObj = {},
        currentNode = head

    hashObj[head.value] = true

    while (currentNode.next){
        let value = currentNode.next.value
        if (hashObj[value]) {
            currentNode.next = currentNode.next.next
        } else {
            hashObj[value] = true
            currentNode = currentNode.next
        }

    }

    return head
}


let head = new Node(1)
head.bulkAddToLL([2, 3, 4, 5, 6, 2, 3, 9, 7, 8, 9])

console.log(deleteDuplicates(head))

