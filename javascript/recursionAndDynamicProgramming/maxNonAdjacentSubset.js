/*
Write a function that takes in an array of positive integers and returns an integer representing the max sum of non-adjacent elements in the array. If a sum can't be generated return 0

Time: O(n)
Space: O(n)
*/

const maxSubsetSumNoAdjacent = (array) => {

    let maxArray = [array[0], Math.max(array[0], array[1])]
    if (array.length === 0) { return 0 }
    else if (array.length === 1) { return maxArray[0] }
    else if (array.length === 2) { return maxArray[1] }
    else {
        for (let i = 2; i < array.length; i++){
            maxArray[i] = Math.max(maxArray[i - 2] + array[i], maxArray[i - 1])
        }
    }

    return maxArray[array.length - 1]
}

console.log(maxSubsetSumNoAdjacent([2]))  // 2
console.log(maxSubsetSumNoAdjacent([5, 2]))  // 5
console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]))  // 330
