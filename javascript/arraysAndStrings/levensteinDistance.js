/*
You are given two strings. Find the minimum number of single-character edits (insertions, deletions or substitutions)
required to change the first string into another.

Time: O(m * n) where m is the length of str1 and n is the length of str2
Space: O(m * n) where m is the length of str1 and n is the length of str2
*/

function levenshteinDistance(str1, str2) {

    let matrix = new Array(str2.length + 1).fill(null)
    matrix = matrix.map(() => new Array(str1.length + 1).fill(null))

    matrix = initializeMatrixValues(matrix)

    if (matrix.length === 1) return matrix[0].pop()

    for (let row = 1; row < matrix.length; row++){
        for (let column = 1; column < matrix[row].length; column++){
            if (matrix[row][column] === null){
                let minAdjacentValue = findMinimumAdjacentValue(matrix, row, column)
                matrix[row][column] = str1[column - 1] === str2[row - 1] ?  matrix[row - 1][column - 1] : minAdjacentValue + 1
            }
        }
    }
    return matrix[str2.length][str1.length]
}


function findMinimumAdjacentValue(matrix, row, column){
    return Math.min(matrix[row - 1][column], matrix[row][column - 1], matrix[row - 1][column - 1])
}

function initializeMatrixValues(matrix){

    for (let i = 0; i < matrix[0].length; i++){
        matrix[0][i] = i
    }
    for (let j = 0; j < matrix.length; j++){
        matrix[j][0] = j
    }

    return matrix
}

console.log(levenshteinDistance('', 'q')) // 1
console.log(levenshteinDistance('cats', 'bats')) // 1
console.log(levenshteinDistance('1234567890', 'abcdefghij')) // 10
console.log(levenshteinDistance('biting', 'mittens')) // 4

