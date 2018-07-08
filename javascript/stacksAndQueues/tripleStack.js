/*
Create a TripleStack class that'll allow you to implement 3 stacks using a single array

Each index in the array belongs to a different stack based on the value of the array index % 3
*/

class TripleStack{
    constructor(){
        this.array = new Array(3)
    }

    push(value, stackNumber){
        if (stackNumber > 3) throw error

        stackNumber = stackNumber % 3

        let filled = false

        while (!filled){
            if (this.array[stackNumber] === undefined){
                this.array[stackNumber] = value
                filled = true
            }
            stackNumber += 3
        }
    }

    pop(stackNumber){

        if (stackNumber > 3) throw error

        stackNumber = stackNumber % 3

        while (this.array[stackNumber] === undefined){
            this.array[stackNumber] = this.array[stackNumber + 3]
        }

        let poppedValue = this.array[stackNumber]

        while (this.array[stackNumber] !== undefined){
            this.array[stackNumber] = this.array[stackNumber + 3]
            stackNumber = stackNumber + 3
        }

        return poppedValue
    }

    isEmpty(stackNumber){
        if (stackNumber > 3) throw error

        stackNumber = stackNumber % 3
        if (this.array[stackNumber] === undefined) return true
        return false
    }

    peek(stackNumber){
        if (stackNumber > 3) throw error
        stackNumber = stackNumber % 3

        while (this.array[stackNumber + 3] === undefined){
            this.array[stackNumber] = this.array[stackNumber + 3]
        }

        return this.array[stackNumber]
    }

}

let stack = new TripleStack()

stack.push(17, 1)
stack.push(30, 2)
stack.push(119, 3)
stack.push(20, 1)

console.log(stack.pop(1)) // 20
console.log(stack.pop(2)) // 30
console.log(stack.pop(3)) // 119
console.log(stack.pop(1)) // 17
