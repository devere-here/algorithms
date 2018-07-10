/*
Implement a class for a binary tree which has the functions insert, find, and remove. In addition to these
functions your class should also have a getRandomNode function which returns a random node from the tree. 
All nodes should be equally likely to be chosen.

Complexity of getRandom method (eventhough it doesn't take any inputs)
Time: Best Case O(1), Worst case: O(log(n)) where n is the depth of the tree
Space: O(1)
*/

function Node(value){
    this.value = value
    this.left = null
    this.right = null
    this.nodesOnTheLeft = 0
    this.nodesOnTheRight = 0

}

Node.prototype.insert = function(value){

    if (value < this.value && this.left){ 
        this.nodesOnTheLeft++
        this.left.insert(value)
    }
    else if (value < this.value){
        this.nodesOnTheLeft++
        this.left = new Node(value)
    }
    else if (value > this.value && this.right){ 
        this.nodesOnTheRight++
        this.right.insert(value)
    }
    else { 
        this.nodesOnTheRight++
        this.right = new Node(value)
    }

}

Node.prototype.find = function(value){
    if (!this) return false

    if (value < this.value){
        this.left.find(value)
    } else if (value > this.value){
        this.right.find(value)
    } else {
        return this
    }
       
}

Node.prototype.remove = function(value, parent = null){
    if (!this) return false

    let newPosition = parent.left === this ? parent.left : parent.right

    if (value < this.value){
        this.nodesOnTheLeft--
        this.left.remove(value, this)
    } else if (value > this.value){
        this.nodesOnTheRight--
        this.right.remove(value, this)
    } else {
        this.severConnection(newPosition)
    }
}

Node.prototype.severConnection = function(newPosition){

    if (this.left && this.right){
        let leftMostNodeOnTheRight = this.right

        while (leftMostNodeOnTheRight.left){
            leftMostNodeOnTheRight = leftMostNodeOnTheRight.left
        }

        leftMostNodeOnTheRight.left = this.left
        newPosition = this.right

    } else if (this.left || this.right){
        let childNode = this.left ? this.left : this.right

        newPosition = childNode
    } else {
        newPosition = null
    }
}

Node.prototype.getRandomNode = function(){
    let random = Math.random(),
        totalNodesRemaining = this.nodesOnTheLeft + this.nodesOnTheRight + 1

    if (random <= 1 / totalNodesRemaining){
        return this
    } else if (random <= (1 / totalNodesRemaining) + (this.nodesOnTheLeft / totalNodesRemaining)){
        return this.left.getRandomNode()
    } else {
        return this.right.getRandomNode()
    }
}


let head = new Node(100)
head.insert(50)
head.insert(150)

console.log(head.getRandomNode())   // 1/3 the 50 node 1/3 the 100 node, 1/3 the 150 node
