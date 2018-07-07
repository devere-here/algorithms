/*
Write a function that takes in an array of integers and returns an array of length 2 representing the largest range of numbers contained in that array.
A range is definded as a collection of integers that come right after each other in the set of real integers. The numbers in your input array do not
have to be next to each other.

ex: [2, 0, 5, 1, 4] would return [0, 2]

Time: O(n^2) - we have to loop through the array and then loop through our tuples array inside of our first array. However, in the worst case
our tuple array will be a series of disjointed integers [[1, 1], [3, 3], ...] in which case the time complexity of the two combined loops would be
n * ((n - 1) + (n - 2) + ...) which rounds to O(n^2)

Space: O(n) - will create a tuple array whose length can range from 1 to n

*/

const findRangeBoundary = (set, number) => {
    let start = number,
        end = number,
        checkForNewStart = true,
        checkForNewEnd = true

    while (checkForNewStart || checkForNewEnd){
        if (checkForNewStart && set.has(start - 1)) start -= 1
        else checkForNewStart = false

        if (checkForNewEnd && set.has(end + 1)) end += 1
        else checkForNewEnd = false
    }

	return [start, end]
}

const largestRange = (array) => {

    if (!array.length) return null

	let set = new Set(array)
	let tuples = []

	for (let i = 0; i < array.length; i++){
		let exists = false
		tuples.forEach(tuple => {
			if (array[i] >= tuple[0] && array[i] <= tuple[1]) exists = true
		})

		if (!exists){
			let newTuple = [array[i], array[i]]
			newTuple = findRangeBoundary(set, array[i])
			tuples.push(newTuple)
		}
	}

	let maxTuple = tuples[0],
		maxDifference = tuples[0][1] - tuples[0][0]

	for (let i = 1; i < tuples.length; i++){
		let currentDifference = tuples[i][1] - tuples[i][0]
		if (currentDifference >= maxDifference){
			maxDifference = currentDifference
			maxTuple = tuples[i]
		}
	}

	return maxTuple
}

console.log(largestRange([]))   // null
console.log(largestRange([1]))  // [1, 1]
console.log(largestRange([2, 0, 5, 1, 4]))  // [0, 2]
