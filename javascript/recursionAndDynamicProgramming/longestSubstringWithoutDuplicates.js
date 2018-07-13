/*
Write a function that takes in a string and return the longest substring without duplicate characters

Time: O(n)
Space: O(n)
*/

const longestSubstringWithoutDuplication = (string) => {

    let dpArr = []

    for (let i = 0; i < string.length; i++){
        let set = new Set(),
            currentStr = '',
            repeatedLetter = false

        let j = i

        while (j < string.length && !repeatedLetter){
            if (!set.has(string[j])){
                set.add(string[j])
                currentStr += string[j]
            } else {
                repeatedLetter = true
            }
            j++
        }
        dpArr.push(currentStr)
    }

    return getLargestSubString(dpArr)
}

function getLargestSubString(dpArr){
    let longestStr = ''

    for (let k = 0; k < dpArr.length; k++){
        if (dpArr[k].length > longestStr.length){
            longestStr = dpArr[k]
        }
    }

    return longestStr
}


console.log(longestSubstringWithoutDuplication('watermelon'))  // waterm
console.log(longestSubstringWithoutDuplication('quakerbrandoatmeal'))  // quakerb
console.log(longestSubstringWithoutDuplication('cantaloupe'))  // ntaloupe
