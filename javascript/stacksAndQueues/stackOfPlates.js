/*
Imagine a literal stacks of plates. If the stack gets too high, it might topple. Therefore,
in real life, we'd likely start a new stack when the previous stack exceeds some threshold.
Implements a data structure setOfStacks that mimics this.

*/

function StacksOfPlates(limit){
    this.stack = [[]]
    this.limit = limit
    this.currentStackIdx = 0
}

StacksOfPlates.prototype.push = function(value){

    if (this.stack[this.currentStackIdx].length === this.limit){
        this.currentStackIdx++
        this.stack[this.currentStackIdx] = []
    }

    this.stack[this.currentStackIdx].push(value)
}

StacksOfPlates.prototype.pop = function(){

    if (this.stack[this.currentStackIdx].length === 0){
        this.currentStackIdx--
    }

    return this.stack[this.currentStackIdx].pop()
}

let stackSet = new StacksOfPlates(2)

stackSet.push(3)
stackSet.push(6)
stackSet.push(9)
stackSet.push(11)
stackSet.push(2)
stackSet.push(4)
stackSet.push(9)


stackSet.pop()
stackSet.pop()
stackSet.pop()
stackSet.pop()
stackSet.pop()
stackSet.pop()


stackSet.push(11)
stackSet.push(2)
stackSet.push(4)
stackSet.push(9)
