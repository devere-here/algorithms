/*
Return the minimum number of deletion operations needed to be performed on both strings to create an anagram from those two words.

Time O(n) - where n is the length of str1
Space O(m) - where m is the length of str2
*/

const numDeletionsForAnagram = (str1, str2) => {
    let deletionCounter = 0,
        cache = {}

    for (const letter of str1){
        let startIdx = letter in cache ? cache[letter] + 1 : 0,
            letterIdx = str2.indexOf(letter, startIdx)

        if (letterIdx !== -1) cache[letter] = letterIdx
        else deletionCounter++
    }

    let anagramLength = str1.length - deletionCounter

    return deletionCounter + (str2.length - anagramLength)
}

console.log(numDeletionsForAnagram('abc', 'cde'))  // 4
console.log(numDeletionsForAnagram('cat', 'cat'))  // 0
console.log(numDeletionsForAnagram('ttt', 't'))  // 2
