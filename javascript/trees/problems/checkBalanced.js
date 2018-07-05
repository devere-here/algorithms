/* height of two subtrees never differ by more than 1 */

function Node(value){
    this.value = value
    this.left = null
    this.right = null
}

Node.prototype.insert = function(value){

    if (value < this.value){
        if (this.left) this.left.insert(value)
        else this.left = new Node(value)
    } else if (this.right){ 
        this.right.insert(value)
    } else {
        this.right = new Node(value)
    }

}

const getHeight = node => {
    if (!node) return -1
    return Math.max(getHeight(node.left) + 1, getHeight(node.right) + 1)
}

/*
Space: O(1)
Time: O(nLog(n)) -> because for every node we hit all the nodes below it in it's subtree
*/

const checkBalanced = node => {

    if (!node.left && !node.right) return true

    let leftHeight = getHeight(node.left),
        rightHeight = getHeight(node.right)

    if (Math.abs(leftHeight - rightHeight) > 1) return false
    else return checkBalanced(node.left) && checkBalanced(node.right)
}

let head1 = new Node(10)
head1.insert(5)
head1.insert(15)
head1.insert(25)
head1.insert(35)
head1.insert(20)
head1.insert(50)

let head2 = new Node(100)
head2.insert(50)
head2.insert(150)
head2.insert(25)
head2.insert(75)
head2.insert(125)
head2.insert(175)

console.log(checkBalanced(head1)) // false
console.log(checkBalanced(head2)) // true

