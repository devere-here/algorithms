/*
    Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up all the numbers
    in a non-empty subarray of the input array. A subarray must only contain adjacent numbers.
*/

const maxSumSubArray = arr => {
    let maxSum = arr[0],
        maxSumLastIdx = arr[0]

    for (let i = 1; i < arr.length; i++){
      maxSumLastIdx = Math.max(maxSumLastIdx + arr[i], arr[i])
      maxSum = Math.max(maxSumLastIdx, maxSum)
    }

    return maxSum
}

console.log(maxSumSubArray([-3, -1, -4])) // -1
console.log(maxSumSubArray([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])) // 19
