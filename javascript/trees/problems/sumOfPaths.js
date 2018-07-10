/*
Write a function that returns all the possible paths in a tree whose sum matches a target sum

Time: O(n) - because we're visiting each node in the tree as long as the total sum is less than the target
Space: O(n * log(n)) - where n is the number fo tree nodes - we'll have a copy of the currentArray for every node. 
The length of the current array will depend on the depth of that array. The space taken up by currentArrays is larger
than that of the collection so it overrides the collection in terms of complexity
*/

function Node(value){
    this.value = value
    this.left = null
    this.right = null
}

Node.prototype.insert = function(...values){

    values.forEach(value => {
        if (value < this.value){
            if (this.left) this.left.insert(value)
            else this.left = new Node(value)
        } else if (this.right){
            this.right.insert(value)
        } else {
            this.right = new Node(value)
        }
    })
}

const sumOfPaths = (node, target, currentSum = 0, currentArray = [], collection = []) => {
    currentArray.push(node.value)
    currentSum += node.value

    if (currentSum === target){
        collection.push(currentArray)
    } else if (currentSum < target){
        if (node.left) sumOfPaths(node.left, target, currentSum, currentArray.slice(0), collection)
        if (node.right) sumOfPaths(node.right, target, currentSum, currentArray.slice(0), collection)
    }


    return collection
}

let head = new Node(100)
head.insert(50, 150, 25, 75, 125, 175)

let head2 = new Node(5)
head2.insert(6, 4, 2)

console.log(sumOfPaths(head, 175))  // [100, 50, 25]
console.log(sumOfPaths(head2, 11)) //[[5, 4, 2], [5, 6]]
