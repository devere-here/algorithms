/*
A magic index of an array is defined to be an index such that A[i] = i. Given an array of sorted integers find the magic index if it exists.

Time: O(log(n))
Space: O(log(n))

*/

const magicIndex = (array, start = 0, end = array.length) => {
    if (start > end) return null

    let mdpt = Math.floor((start + end) / 2)

    if (array[mdpt] < mdpt){
        return magicIndex(array, mdpt + 1, end)
    } else if (array[mdpt] > mdpt){
        return magicIndex(array, start, mdpt - 1)
    } else {
        return mdpt
    }
}


console.log(magicIndex([0, 15]))  // 0
console.log(magicIndex([5, 6, 7]))  // null
console.log(magicIndex([-2, 0, 1, 3, 5]))  // 3
