/*
Classic Quick Sort Algorithm

Time: O(n * log(n))
Space: O(log(n)) - due to the space taken up in each recursive call
*/

const quickSort = (arr, start = 0, end = arr.length - 1) => {
    if (arr.length === 0) return []

    let wall = start,
        pivot = arr[end]

    for (let i = start; i < end; i++){
        if (arr[i] < pivot){
            swap(arr, i, wall)
            wall++
        }
    }

    swap(arr, wall, end)

    if (wall - start > 1){
        arr = quickSort(arr, start, wall - 1)
    }

    if (end - wall > 1){
        arr = quickSort(arr, wall + 1, end)
    }

    return arr
}

function swap(arr, idx1, idx2){
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

console.log(quickSort([]))  //[]
console.log(quickSort([5, -5, 0]))  //[-5, 0, 5]
console.log(quickSort([3, 1, 6, 7, 2, 11, 3]))  // [1, 2, 3, 3, 6, 7, 11]
