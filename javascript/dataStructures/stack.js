class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(value){
        this.head = value === undefined ? null : new Node(value)
    }

    push(...values){
        values.forEach(value => {
            let temp = this.head
            this.head = new Node(value)
            this.head.next = temp
        })
    }

    pop(){
        if (!this.head) return null

        let temp = this.head
        this.head = this.head.next
        return temp
    }

    peek(){
        if (this.head) return true
        return false
    }
}


let stack = new Stack()
console.log(stack.peek())  // false
console.log(stack.pop())  // null
stack.push(5, 6, 11, 13, 9, 2)

console.log(stack.peek())  //true
console.log(stack.pop())  // Node w/ value 2
console.log(stack.pop())  // Node w/ value 9
