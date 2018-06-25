function Node(value){
    this.value = value
    this.children = []
}

Node.prototype.generateChildren = function(childrenArr){
    childrenArr.forEach((child) => {
        this.children.push(new Node(child))
    })
}

/*
    Space: O(1)
    Time: O(n)
*/

const depthFirstSearch = (node, searchValue) => {

    if (node.value === searchValue) return true

    let found = false,
        idx = 0

    while (!found && idx < node.children.length){
        found = depthFirstSearch(node.children[idx], searchValue)
        idx++
    }

    return found
}

module.exports = { Node, depthFirstSearch }
