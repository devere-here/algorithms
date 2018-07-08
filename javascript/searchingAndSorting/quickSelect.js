/*
Write a function that takes in an array of integers and an integer k. And returns the kth smalles integer in that
array in linear time.

Time: O(n)
Space: O(1)
*/


function quickselect(array, k) {
	let start = 0,
		end = array.length - 1

	while (start <= end){
		let wall = start,
			pivot = array[end]
		for (let i = start; i < end; i++){
			if (array[i] < pivot){
				array = swap(array, wall, i)
				wall++
			}
		}
		array = swap(array, wall, end)

		if (wall === k - 1) return array[wall]
		else if (wall < k - 1) start = wall + 1
		else end = wall - 1
	}

	return null
}

function swap(array, idx1, idx2){
	let temp = array[idx1]
	array[idx1] = array[idx2]
	array[idx2] = temp

	return array
}

console.log(quickselect([5], 1)) // 5
console.log(quickselect([4, 3, 6, 1], 2)) // 3
console.log(quickselect([4, 7, 1, 9, 5, 0, -1], 4)) // 4
