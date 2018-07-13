/*
Given an array of positive integers representing coin denominations and a single
non-negative integer representing a target amount of money, write a function that
returns the number of ways to make change for that target amount using the given
coin denominations

Time: O(d) - where d is the number of denominations
Space: O(n) - where n the the input n

*/

function numberOfWaysToMakeChange(n, denoms) {

	let ways = new Array(n + 1)
	ways.fill(0, 0, n + 1)
	ways[0] = 1

	denoms.forEach(denom => {
		ways.forEach((way, idx) => {
			if (idx >= denom){
				ways[idx] += ways[idx - denom]
			}
		})
	})

	return ways.pop()
}

console.log(numberOfWaysToMakeChange(1, [2, 3, 4, 7]))  // 0
console.log(numberOfWaysToMakeChange(5, [1, 5, 10, 25]))  // 2
console.log(numberOfWaysToMakeChange(12, [2, 3, 7]))  // 4

