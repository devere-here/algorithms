/*
    Given a directed graph, design an algorithm to find whether there's a route between nodes
*/

function Node(value){
    this.value = value
    this.children = []
    this.visited = false
    this.next = null
}

Node.prototype.generateChildren = function(childrenArr){
    childrenArr.forEach((child) => {
        this.children.push(new Node(child))
    })
}


function Graph(){
    this.allNodes = []
}

Graph.prototype.addNodes = function(valueArr){
    console.log('in addNodes')
    valueArr.forEach(value => {
        this.allNodes.push(new Node(value))
    })
}

const exists = (ele) => ele !== null && ele !== undefined

Graph.prototype.addChildren = function(parentIdx, childrenIdx){
    if (exists(this.allNodes[parentIdx])){

        childrenIdx.forEach(childIdx => {
            if (exists(this.allNodes[childIdx])){
                this.allNodes[parentIdx].children.push(this.allNodes[childIdx])
            }
        })
    }
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


const routeBetweenNodes = (node1, node2) => {

    let queue = new Queue(node1)

    while (queue.head){

        if (queue.head === node2){
            return true
        } else if (!queue.head.visited) {
            queue.head.visited = true
            queue.head.children.forEach(child => {
                queue.enqueue(child)
            })
        }
        queue.dequeue()
    }

    return false
}

module.exports = {
    Graph,
    routeBetweenNodes
}
