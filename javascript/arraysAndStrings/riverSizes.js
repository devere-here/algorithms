/*
You are given a 2D array filled with 0s and 1s. the 0s represent land and the 1s represent rivers. A river consists
of any number of 1s that are horizontally or vertically adjacent. The number of adjacent 1s form the river's size. 
Write a function that returns an array of the sizes of all rivers represented in the matrix. Note that the array is not
necessarily of equal width and height.

Time: O(n * m) - where n is the width and m is the height of the array
Space: O(1) Best Case (no rivers), O(n * m) Worst case (all rivers). In general space depends on values of input and not
the input size.

*/

function riverSizes(array){
	let riverArray = []
	for (let i = 0; i < array.length; i++){
		for (let j = 0; j < array[i].length; j++){
			if (array[i][j] === 1){
				riverArray.push(checkNeighbors(array, i, j, 1))
			}
		}
	}
	return riverArray
}


function checkNeighbors(array, row, column, counter){
    array[row][column] = 0

	if (array[row][column + 1] === 1){
		counter = checkNeighbors(array, row, column + 1, counter + 1)
	} if (array[row + 1] && array[row + 1][column] === 1){
		counter = checkNeighbors(array, row + 1, column, counter + 1)
	} if (array[row][column - 1] === 1){
		counter = checkNeighbors(array, row, column - 1, counter + 1)
	} if (array[row - 1] && array[row - 1][column] === 1){
		counter = checkNeighbors(array, row - 1, column, counter + 1)
	}

	return counter
}


const array1 = [[1, 0, 1, 1]]
const array2 = [[1, 0, 0, 1],
                [1, 0, 1, 0],
                [0, 0, 1, 0],
                [1, 0, 1, 0]]
const array3 = [[1, 1, 1],
                [1, 1, 1],
                [1, 1, 1]]

console.log(riverSizes(array1))  // [1, 2]
console.log(riverSizes(array2))  // [2, 1, 3, 1]
console.log(riverSizes(array3))  // [9]
