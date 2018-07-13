/*
Given a function that takes in a string. Return that string's largest palindromic string.

Time: O(n) - I loop through the string and then I loop through all the palindrome centers. But the complexity of number of findLargestPalindrome
depends on the content of the string and not its length

Space: O(p) - where p is the number of palindromes in the string

*/


function longestPalindromicSubstring(string) {

    if (string.length === 1) return string[0]

    let palindromeCenters = findPalindromeCenters(string)
    let [largestLength, largestIndex] = findLargestPalindrome(palindromeCenters, string)

    if (palindromeCenters.length === 0) return ''

    return constructPalindrome(palindromeCenters, largestIndex, largestLength, string)
}

function findPalindromeCenters(string){

    let strArr = string.split(''),
        oneLetterBefore = '',
        twoLettersBefore = '',
        palindromeCenters = []

    strArr.forEach((letter, idx) => {
        if (idx === 0){
            twoLettersBefore = letter
        } else if (letter === oneLetterBefore && letter === twoLettersBefore){
            palindromeCenters.push([idx - 1])
        } else if (letter === oneLetterBefore){
            palindromeCenters.push([idx - 1, idx])
        } else if (letter === twoLettersBefore){
            palindromeCenters.push([idx - 1])
        }

        twoLettersBefore = oneLetterBefore
        oneLetterBefore = letter

    })

    return palindromeCenters
}


function findLargestPalindrome(palindromeCenters, string){

    let largestLength = 0,
        largestIndex = -1

    palindromeCenters.forEach((palindromeCenter, idx) => {

        let currentLength = palindromeCenter.length,
            leftLetter,
            rightLetter

        if (currentLength === 1){
            leftLetter = palindromeCenter[0] - 1
            rightLetter = palindromeCenter[0] + 1
        } else {
            leftLetter = palindromeCenter[0] - 1
            rightLetter = palindromeCenter[1] + 1
        }


        let isPalindrome = true

        while (leftLetter >= 0 && rightLetter < string.length && isPalindrome === true){

            if (string[leftLetter] === string[rightLetter]) currentLength += 2
            else isPalindrome = false

            leftLetter--
            rightLetter++

        }

        if (currentLength > largestLength){
            largestLength = currentLength
            largestIndex = idx
        }

    })

    return [largestLength, largestIndex]
}


function constructPalindrome(palindromeCenters, largestIndex, largestLength, string){

    let substr

    if (palindromeCenters[largestIndex].length === 1){
        substr = string.substring(palindromeCenters[largestIndex][0] - Math.floor(largestLength / 2), palindromeCenters[largestIndex][0] + Math.floor(largestLength / 2) + 1)
    } else {

        let start = palindromeCenters[largestIndex][0] - ((largestLength / 2) - 1),
            end = palindromeCenters[largestIndex][1] + ((largestLength / 2))

        substr = string.substring(start, end)

    }

    return substr
}


console.log(longestPalindromicSubstring('cashjanshjkcnajwwwwwwwwwwwwwwwwwwdsnjlkcnsdijsnkl'))  // wwwwwwwwwwwwwwwwww
console.log(longestPalindromicSubstring('abcdefgfedcba'))  // abcdefgfedcba
console.log(longestPalindromicSubstring('granola'))  // ''
