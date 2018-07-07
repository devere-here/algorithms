/*
Given a non-empty array of integers, write a function that returns an array of length 2. The first element being the greatest sum that can be generated
from a strictly increasing subsequence within the input array. The second element should be the array of numbers in that sequence. A subsequence is
defined as a set of numbers that are not necessarily adjacent but are in the same order as they appear in the array

Time: O(n^2)
Space: O(n)
*/

function maxSumIncreasingSubsequence(array) {
	let maxSumArr = new Array(array.length),
		subSequenceArr = new Array(array.length)

	maxSumArr[0] = array[0]
	subSequenceArr = [[array[0]]]

	for (let idx = 1; idx < array.length; idx++){
		let sumToAddTo = 0,
			sequenceToAddTo = []
		for (let previousIdx = 0; previousIdx < idx; previousIdx++){
			let currentSum = maxSumArr[previousIdx]
			if (array[previousIdx] < array[idx] && currentSum > sumToAddTo){
				sumToAddTo = currentSum
				sequenceToAddTo = subSequenceArr[previousIdx]
			}
		}
		maxSumArr[idx] = sumToAddTo + array[idx]
		subSequenceArr[idx] = sequenceToAddTo.concat(array[idx])
	}

	let maxSum = Math.max(...maxSumArr)
	let maxSubSequence = subSequenceArr[maxSumArr.indexOf(maxSum)]

	return [maxSum, maxSubSequence]
}

console.log(maxSumIncreasingSubsequence([1]))  // [1, [1]]
console.log(maxSumIncreasingSubsequence([3, 2, 1]))  // [3, [3]]
console.log(maxSumIncreasingSubsequence([1, 2, 3]))  // [6, [1, 2, 3]]
console.log(maxSumIncreasingSubsequence([7, 2, 3, 9, 5, 1, 8]))  // [18, [2, 3, 5, 8]]
