/**
 * Design an algorithm and write code to find the first common ancestor of two nodes.
 * It's not guarenteed that these nodes are in the tree. You can't use any additional data structures
 */

function Node(value){
    this.value = value
    this.children = []
}

Node.prototype.addChildren = function(array){
    array.forEach(value => {
        this.children.push(new Node(value))
    })
}


const firstCommonAncestor = (head, node1, node2) => {
    let found1 = false,
        headIsNode = head === node1 || head === node2 ? true : false

    for (let i = 0; i < head.children.length; i++){
        let numOfFoundNodes = checkDescendants(head.children[i], node1, node2)

        if (numOfFoundNodes === 1 && (headIsNode || found1)) return head
        else if (numOfFoundNodes === 1) found1 = true
        else if (numOfFoundNodes === 2) return firstCommonAncestor(head.children[i], node1, node2)
    }

    return null
}

const checkDescendants = (root, node1, node2) => {
    let counter = 0

    if (root.children.length){
        for (let i = 0; i < root.children.length; i++){
            counter += checkDescendants(root.children[i], node1, node2)
        }
    }

    if (root === node1 || root === node2) counter++

    return counter
}

let head = new Node(5)
head.addChildren([2, 1, 4, 17 ])
head.children.forEach(child => {
    child.addChildren(['a', 'b', 'c'])
})

console.log(firstCommonAncestor(head, head.children[2], head.children[2].children[2]))
