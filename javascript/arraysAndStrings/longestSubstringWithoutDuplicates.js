/*
Write a function that takes in a string and return the longest substring without duplicate characters

Time: O(n)
Space: O(n)
*/

function longestSubstringWithoutDuplication(string) {
    let start = 0,
        maxStartAndEnd = [0, 0],
        hashMap = {}

    hashMap[string[0]] = 0

    for (let i = 1; i < string.length; i++){
        if (hashMap[string[i]] === undefined){
            hashMap[string[i]] = i
        } else if (hashMap[string[i]] < start){
        hashMap[string[i]] = i
        } else {
            start = hashMap[string[i]] + 1
            hashMap[string[i]] = i
        }

        if ((i - start) > (maxStartAndEnd[1] - maxStartAndEnd[0])){
            maxStartAndEnd = [start, i]
        }
    }

    return string.substring(maxStartAndEnd[0], maxStartAndEnd[1] + 1)
  }

console.log(longestSubstringWithoutDuplication('abcb'))  // abc
console.log(longestSubstringWithoutDuplication('cantaloupe'))  // ntaloupe
console.log(longestSubstringWithoutDuplication('abccdeaabbcddef'))  // cdea
