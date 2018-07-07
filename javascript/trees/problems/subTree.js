/*
Tree 1 and 2 are very large binary trees, with tree1 being much bigger than tree2. Create an algorithm to 
determine if T2 is a subtree of T1

Time: Best case O(s) where s is the number of nodes in the small tree, worst case is O(b) where b is the length
of the big tree so average case is O(n) where n can be either some multiple of b or s

Space: O(b + s) - where b is the number of nodes in the big tree and s is the number of nodes in the small tree
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


const isSubTree = (bigTree, smallTree) => {

    let bigTreeArr = preOrderTraversal(bigTree),
        smallTreeArr = preOrderTraversal(smallTree)

    for (let i = 0; i < bigTreeArr.length; i++){
        if (bigTreeArr[i] === smallTreeArr[0]){
            if (checkSubTree(bigTreeArr, smallTreeArr, i)){
                return true
            }
        }
    }
    return false
}


function checkSubTree(bigTreeArr, smallTreeArr, idx){
    for (let j = 0; j < smallTreeArr.length; j++){
        if (bigTreeArr[idx + j] !== smallTreeArr[j]){
            return false
        }
    }

    return true
}


function preOrderTraversal(tree, arr = []){

    arr.push(tree.value)

    if (tree.left) preOrderTraversal(tree.left, arr)
    else arr.push(null)

    if (tree.right) preOrderTraversal(tree.right, arr)
    else arr.push(null)

    return arr
}


let head = new Node(100)
head.insert(50, 150, 25, 75, 125, 175)

let head2 = new Node(100)
head2.insert(50, 150, 25, 75, 125, 175)

let head3 = new Node(50)
head3.insert(25, 85)


console.log(isSubTree(head, head3))
