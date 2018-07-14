/*
Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtained by summing up
all the numbers in a subarray within the input array

Time: O(n)
Space: O(n)
*/

function kadanesAlgorithm(array) {

    let idxArr = [-1]
    array.forEach((ele, idx) => {
        if (ele < 0) idxArr.push(idx)
    })
    idxArr.push(array.length)

    let maxSum = -Infinity,
            currentSum,
            currentArr


    for (let i = 0; i < idxArr.length; i++){
        for (let j = i + 1; j < idxArr.length; j++){
            currentArr = array.slice(idxArr[i] + 1, idxArr[j])
            currentSum = currentArr.reduce((total, ele) => total + ele, 0)

            if (currentSum > maxSum && currentArr.length > 0){
                maxSum = currentSum
            }
        }
    }

    return maxSum

}

console.log(kadanesAlgorithm([1, 2, 3, 4, 5]))  // 15
console.log(kadanesAlgorithm([3, -4, 2, -5, 6, -1]))  // 6
console.log(kadanesAlgorithm([-1]))  // -1


