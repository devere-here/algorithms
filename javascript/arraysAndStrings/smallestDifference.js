/*
Write a function that takes two non-empty arrays of integers. The function should find a pair of numbers (one from
the first array and one from the second) whose absolute difference is closest to 0.

Time: O(nlog(n) + mlog(m)) - the sort methods take up the most time in the algorithm
Space: O(1)

*/

const smallestDifference = (arrayOne, arrayTwo) => {
    arrayOne = arrayOne.sort((a, b) => a - b)
    arrayTwo = arrayTwo.sort((a, b) => a - b)

    let i = 0,
        j = 0,
        minDifference = Math.abs(arrayOne[0] - arrayTwo[0]),
        minDifferenceArr = [arrayOne[0], arrayTwo[0]]

    while (i < arrayOne.length && j < arrayTwo.length){

        let difference = arrayOne[i] - arrayTwo[j]

        if (Math.abs(difference) === 0) {
            return [arrayOne[i], arrayTwo[j]]
        } else if (Math.abs(difference) < minDifference){
            minDifference = Math.abs(difference)
            minDifferenceArr = [arrayOne[i], arrayTwo[j]]
        }

        if (difference < 0) i++
        else j++
    }

    return minDifferenceArr
}

console.log(smallestDifference([4, 1, 7], [9, -3, 2]))  // [1, 2]
console.log(smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17]))  // [20, 17]
