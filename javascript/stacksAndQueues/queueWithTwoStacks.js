/*
Implement a queue using two stacks
Space: O(n) where n is the length of elements in the queue
Time: 0(1) for a repeated action (ex: you shifted for a second time after a first time)
    O(n) for a different action (ex: you push to the queue after you shifted)

*/
function QueueWithTwoStacks(){
    this.stack1 = []
    this.stack2 = []
}

QueueWithTwoStacks.prototype.push = function(value){

    while (this.stack2.length){
        this.stack1.push(this.stack2.pop())
    }

    this.stack1.push(value)
}

QueueWithTwoStacks.prototype.shift = function(){

    while (this.stack1.length){
        this.stack2.push(this.stack1.pop())
    }

    return this.stack2.pop()
}

let queue1 = new QueueWithTwoStacks()

queue1.push(2)
queue1.push(3)
queue1.push(4)
console.log(queue1.shift())
console.log(queue1.shift())
console.log(queue1.shift())
