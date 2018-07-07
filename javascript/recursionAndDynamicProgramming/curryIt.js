function curryItNow(func){
    let fn = func;
    let that;
}


function CurryIt(func) {
    let fn = func

    return function(...args) {

      if (args.length === 0) {
        return fn()
      }

      fn = fn.bind(null, ...args)
    }
}


function adder(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

function welcomer(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
let curriedAdder = CurryIt(adder)

curriedAdder(2, 3)
curriedAdder(4)
curriedAdder(5, 1, 10)
console.log(curriedAdder())


const waysUpStairCase = (height, stepArr) => {
    let waysToGetThere = [1]
    
    for (let currentHeight = 1; currentHeight <= height; currentHeight++){
      let totalSum = 0
      for (let stepIdx = 0; stepIdx < stepArr.length; stepIdx++){
        if (currentHeight >= stepArr[stepIdx]){
          totalSum += waysToGetThere[currentHeight - stepArr[stepIdx]]
          
        }
      }
      waysToGetThere.push(totalSum)
    }
    
    return waysToGetThere.pop()
  }

  


function cat(...args){

}


cat(...arr)