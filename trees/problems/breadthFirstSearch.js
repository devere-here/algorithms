/* This Node constructor is used both for LL Queue and Tree */

function Node(value){
    this.value = value
    this.children = []
    this.next = null
}

Node.prototype.generateChildren = function(childrenArr){
    childrenArr.forEach((child) => {
        this.children.push(new Node(child))
    })
}

function Queue(node){
    this.head = node
    this.tail = this.head
}

Queue.prototype.enqueue = function(node){
    this.tail.next = node
    this.tail = this.tail.next
}

Queue.prototype.dequeue = function(){
    let nextInLine = this.head
    this.head = this.head.next

    return nextInLine
}

/*
    Space: O(n)
    Time: O(n)
*/

const breadthFirstSearch = (node, searchValue) => {

    let queue = new Queue(node)

    while (queue.head){

        if (queue.head.value === searchValue){
            return true
        } else {
            queue.head.children.forEach(child => {
                queue.enqueue(child)
            })
            queue.dequeue()
        }
    }

    return false
}

module.exports = {
    Node,
    breadthFirstSearch
}