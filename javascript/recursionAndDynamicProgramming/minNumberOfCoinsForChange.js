/*
Given an array of positive integers representing coin denominations and a single
non-negative integer representing a target amount of money, write a function that
returns the smallest number of coins needed to make change for that target amount

Time: O(d * n) - where d is the length of denoms and n is the value of n
Space: O(n)

*/

function minNumberOfCoinsForChange(n, denoms) {

	let arr = new Array(n + 1).fill(-1),
        numOfCoins

	arr[0] = 0

    denoms = denoms.filter(denom => denom <= n)

    if (denoms.length === 0) return 0

	denoms.forEach(denom => {
		arr.forEach((dollarValue, idx) => {
			if (idx - denom >= 0 && arr[idx - denom] !== -1) {
				numOfCoins = arr[idx - denom] + 1
				if (numOfCoins < arr[idx] || arr[idx] === -1){
					arr[idx] = numOfCoins
				}
			}
		})
	})
	return arr[n]
}

console.log(minNumberOfCoinsForChange(2, [5, 10, 20]))  // 0
console.log(minNumberOfCoinsForChange(7, [1, 5, 10]))  // 3
console.log(minNumberOfCoinsForChange(24, [1, 5, 10]))  // 6
