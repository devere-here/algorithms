/*
You are given two arrays of length n. One will be of integers 1, 2, ..., n in a random order. The other array will start at 'a' and end at the nth letter of the alphabet. This array will be in alphabetical order. Return the array of letters in the order specified by the first array. Do this in constant time.

For Example:
Inputs: ['a', 'b', 'c', 'd', 'e'] [4, 3, 1, 5, 2]
Output: ['c', 'e', 'b', 'a', 'd']

Time: 0(n)
Space: O(1)
*/

const reorderArray = (letterArr, numArr) => {

    let i = 0

    while (i < letterArr.length){
        swap(letterArr, i, numArr[i] - 1)
        swap(numArr, i, numArr[i] - 1)

        if (i === numArr[i] - 1) i++
    }

    return letterArr
}

function swap(array, idx1, idx2){
    let temp = array[idx1]
    array[idx1] = array[idx2]
    array[idx2] = temp
}

console.log(reorderArray(['a', 'b', 'c', 'd', 'e'], [4, 3, 1, 5, 2])) // ['c', 'e', 'b', 'a', 'd']
console.log(reorderArray(['a', 'b', 'c'], [3, 2, 1])) // ['c', 'b', 'a']
console.log(reorderArray(['a', 'b', 'c'], [1, 2, 3])) // ["a", "b", "c"]
