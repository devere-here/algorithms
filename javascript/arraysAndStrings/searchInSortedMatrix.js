/*
You are given a matrix where each row is sorted and each column is sorted. You are also given a target number.
Write a function that returns the index of that target number in O(n + m) time where n is the number of rows
in the array and m is the number of columns in the array. If the element is not in the array return [-1, -1]
*/


const searchInSortedMatrix = (matrix, target) => {
    let i = 0,
        j = matrix[0].length - 1,
        currentElement
    while (i < matrix.length && j >= 0){
        currentElement = matrix[i][j]
        if (currentElement > target){
            j -= 1
            currentElement = matrix[i][j]
        } else if (currentElement < target){
            i += 1
            j = matrix[i].length - 1
            currentElement = matrix[i][j]
        } else {
            return [i, j]
        }
    }

    return [-1, -1]
}

const matrix = [[1, 4, 7, 12, 15, 1000],
                [2, 5, 19, 31, 32, 1001],
                [3, 8, 24, 33, 35, 1002],
                [40, 41, 42, 44, 45, 1003],
                [99, 100, 103, 106, 128, 1004]]

console.log(searchInSortedMatrix(matrix, 1))  // [0, 0]
console.log(searchInSortedMatrix(matrix, 10))  // [-1, -1]
console.log(searchInSortedMatrix(matrix, 1002))  // [2, 5]
console.log(searchInSortedMatrix(matrix, 33))  // [2, 3]
