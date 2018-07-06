/*
Given an array of integers return all the possible permutations of those integers

Time: 0(n*n!), go through my for loop n! times and perform a filter in each loop. Even though
sometimes I'll filter through arrays less than length n in effect each filter will be O(n) time

Space: O(n*n!), because I'm storing n! array elements all of length n
*/

const getPermutations = (arr, memoizedArr = [], memoizedCollection = []) => {
    if (arr.length){

        for (let i = 0; i < arr.length; i++){
            let idx = i % arr.length,
                tempArr
            tempArr = memoizedArr.concat(arr[idx])
            getPermutations(arr.filter(char => char !== arr[idx]), tempArr, memoizedCollection)
        }

    } else if (memoizedArr.length){
        memoizedCollection.push(memoizedArr)
    }

    return memoizedCollection
}

console.log(getPermutations([])) // will return an array of length 0
console.log(getPermutations([1, 2, 3])) // will return an array of length 6
console.log(getPermutations([1, 2, 3, 4])) // will return an array of length 24
