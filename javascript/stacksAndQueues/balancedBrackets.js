/*
Write a function that takes in a string made up of brackets. Return true if the bracket pattern given is valid. False if its invalid.

Time: O(n)
Space: O(n)

*/

const balancedBrackets = (string) => {

    let bracketStack = [],
        brackets = {
            '(': ')',
            '{': '}',
            '[': ']'
        },
        keys = Object.keys(brackets),
        bool

    for (let i = 0; i < string.length; i++){
        let ele = string[i]

        if (keys.indexOf(ele) !== -1){
            bracketStack.unshift(ele)
        } else if (ele === brackets[bracketStack[0]]){
            bracketStack.shift()
        } else {
            return false
        }
    }

    bool = !bracketStack.length

    return bool
}

console.log(balancedBrackets('(])()(){}[]'))  // false
console.log(balancedBrackets('[{[{((()))}]}]'))  // true
console.log(balancedBrackets('()()(){}[]'))  // true
