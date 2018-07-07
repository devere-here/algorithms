/*
Write a function that can take in an adder function and return a curried version of that function

Space: O(1)
Time: O(1) if you are executing your curriedAdder, but if you're adding new arguments it would be O(n) where n is the length of the args array
*/

function CurryThisFunc(func) {
    let fn = func

    return function(...args) {

      if (args.length === 0) {
        return fn()
      }

      fn = fn.bind(null, ...args)
    }
}


function adder(...args){
    let sum = 0
    for (let i = 0; i < args.length; i++){
        sum += args[i]
    }
    return sum
}


let curriedAdder = CurryThisFunc(adder)
curriedAdder(2, 3)
curriedAdder(4)
curriedAdder(5, 1, 10)

let curriedAdder2 = CurryThisFunc(adder)

let curriedAdder3 = CurryThisFunc(adder)
curriedAdder3(1, 1, 1)
curriedAdder3(1)


console.log(curriedAdder())  // 25
console.log(curriedAdder2()) // 0
console.log(curriedAdder3()) // 4
