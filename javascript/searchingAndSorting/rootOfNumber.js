/*
Given a number greater than or equal to 1, find the nth root of that number. Where n
is a positive integer

Time: O(log(m)) where m is the value of number
Space: O(1)
*/

function root(num, n) {

    if (num < 1 || n % 1 !== 0 || n < 1) return null

    let max = num,
        min = 0,
        midpoint = (max + min) / 2,
        value

    while (true){

        value = Math.pow(midpoint, n)

        if (Math.abs(value - num) <= 0.001){
            return midpoint.toFixed(3)
        }
        else if (value < num){
            min = midpoint
        }
        else if (value > num){
            max = midpoint
        }
        midpoint = (max + min) / 2
    }

}

console.log(root(8, 3)) // 2
console.log(root(1, 5)) // 1
console.log(root(43, 6)) // 1.872
