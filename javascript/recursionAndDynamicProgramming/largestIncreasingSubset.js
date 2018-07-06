/*
Find the largest increasing sequence in an array. The numbers in your sequence don't need to be adjacent, but they
need to be the same order as which they appear in the array
*/

/*
Time: O(n * n/2) ==> O(n^2)
Space: I create an array of length n, but that array is populated with different sub-arrays whose length
depend on the ordering of the input arr. The space complexity is at best O(n) but at worst can be O(n + n-1 + n-2 + ... + 1)
in which case the worst case would also be O(n)
*/

const addToAPreviousSubSequence = (value, sequencesArr) => {

    let subsequenceToAddTo = []

    for (let i = 0; i < sequencesArr.length; i++){
        let lastIdx = sequencesArr[i].length - 1
        if (sequencesArr[i][lastIdx] < value && sequencesArr[i].length >= subsequenceToAddTo.length){
            subsequenceToAddTo = sequencesArr[i]
        }
    }

    return subsequenceToAddTo.concat(value)
}


const longestIncreasingSubsequence = (arr) => {
    let sequencesArr = [],
        longestSubsequence = []

    arr.forEach((number) => {
        let currentSubSequence = addToAPreviousSubSequence(number, sequencesArr)
        if (currentSubSequence.length > longestSubsequence.length) longestSubsequence = currentSubSequence
        sequencesArr.push(currentSubSequence)
    })

    return longestSubsequence
}

console.log(longestIncreasingSubsequence([-1])) // returns [-1]
console.log(longestIncreasingSubsequence([1, 2, 6, 5, 3, 4])) // returns [1, 2, 3, 4]
console.log(longestIncreasingSubsequence([10, 22, 33, 41, 60, 80])) // returns [10, 22, 33, 41, 60, 80]

