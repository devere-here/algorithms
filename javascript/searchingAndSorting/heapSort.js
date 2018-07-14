/*
Sort an array using the heap sort method.

Time: O(n^2)
Space: O(1)
*/

const heapSort = (array) => {

    let pivot = array.length - 1

    while (pivot > 0){
        for (let idx = pivot; idx > 0; idx--){
            let parentIdx = Math.floor((idx - 1) / 2)
            if (array[idx] > array[parentIdx]){
                array = swap(array, idx, parentIdx)
            }
        }
        array = swap(array, 0, pivot)
        pivot--
    }
    return array
}

function swap(array, idx1, idx2){
    let temp = array[idx1]
    array[idx1] = array[idx2]
    array[idx2] = temp

    return array
}


console.log(heapSort([3, 1, 6, 3, 9, 2]))
console.log(heapSort([2, 1]))
