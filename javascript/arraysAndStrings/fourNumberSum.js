/*
Given an array of distinct integers and a target number return all four number combinations
that add up to the target number. All your four number combinations must be distinct integers

Time: O(n^2)
Space: O(n^2)
*/

const fourNumberSum = (arr, target) => {

    let hashObj =  generateHashObj(arr),
        keys = Object.keys(hashObj),
        combinations = []

    keys.forEach(key => {
        if (hashObj[target - key]){
            hashObj[key].forEach(tuple1 => {
                hashObj[target - key].forEach(tuple2 => {
                    let potentialCombination = tuple1.concat(tuple2)
                    potentialCombination = potentialCombination.sort((a, b) => a - b)
                    if (!containsDuplicates(potentialCombination) && !alreadyInCombination(potentialCombination, combinations)){
                        combinations.push(potentialCombination)
                    }
                })
            })
        }
    })

    return combinations
}


function generateHashObj(arr){
    let hashObj = {}

    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            let sum = arr[i] + arr[j]
            if (hashObj[sum]){
                hashObj[sum].push([arr[i], arr[j]])
            } else {
                hashObj[sum] = [[arr[i], arr[j]]]
            }
        }
    }

    return hashObj
}

function containsDuplicates(arr){
    let set = new Set(arr)
    if (set.size === arr.length) return false

    return true
}

function alreadyInCombination(arr, combination){

    for (let i = 0; i < combination.length; i++){
        let bool = true
        for (let j = 0; j < combination[i].length; j++){
            if (arr[j] !== combination[i][j]){
                bool = false
            }
        }
        if (bool) return true
    }

    return false
}

console.log(fourNumberSum([1, 2, 3, 4], 10)) // [1, 2, 3, 4]
console.log(fourNumberSum([5, 3, 6, 1, 4, 2], 14)) // [[1, 2, 5, 6], [1, 3, 4, 6], [2, 3, 4, 5]]
