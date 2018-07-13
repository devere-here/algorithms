/*
Wrtie a function that takes in two strings a main string and a potnential substring of the main string. The function 
should return a version of the main string with every instance of the substring inside of it wrapped in underscores.
If two instances of the substring overlap or are side-by-side to each other then the underscores should only be on the far left and right
of the combined string made up of these two substrings.

Time: O(n) - We have to loop throught the length of your string. There is added complexity based off of the number of substring appearences
inside the string. This added complexity is based on the contents of the string and not its length as a result I don't take it into account.

Space: O(1) at best and O(n) at worst - There is space complexity but it is based on the contents of the input string and not its length

*/

const underscorifySubstring = (string, substring) => {

    let substringIdxs = generateSubstringArr(string, substring)
    if (substringIdxs.length === 0) return string
    substringIdxs = combineSubstrings(substringIdxs)
    return generateUnderscoredString(string, substringIdxs)
}

function generateSubstringArr(string, substring){

    let substringIdxs = []
    for (let i = 0; i < string.length; i++){
        if (string[i] === substring[0]){
            if (string.substring(i, i + substring.length) === substring){
                substringIdxs.push([i, i + substring.length - 1])
            }
        }
    }

    return substringIdxs
}

function combineSubstrings(substringIdxs){
    let j = 0

    while (j < substringIdxs.length){
        if (substringIdxs[j + 1] && substringIdxs[j][1] + 1 >= substringIdxs[j + 1][0]){
            substringIdxs[j][1] = substringIdxs[j + 1][1]
            substringIdxs.splice(j + 1, 1)
        } else {
            j++
        }
    }

    return substringIdxs
}

function generateUnderscoredString(string, substringIdxs){

    let underscoredString = string.substring(0, substringIdxs[0][0])

    for (let idx = 0; idx < substringIdxs.length; idx++){
        underscoredString +=  `_${string.substring(substringIdxs[idx][0], substringIdxs[idx][1] + 1)}_`

        if (substringIdxs[idx + 1]) underscoredString += string.substring(substringIdxs[idx][1] + 1, substringIdxs[idx + 1][0])
        else underscoredString += string.substring(substringIdxs[idx][1] + 1)
    }

    return underscoredString
}

console.log(underscorifySubstring('This is a test, tests are great. testest is the bestest', 'idskjncidsjkcndsiujk'))  //This is a test, tests are great. testest is the bestest
console.log(underscorifySubstring('This is a test, tests are great. testest is the bestest', 'test'))  //This is a _test_, _test_s are great. _testest_ is the bes_test_
console.log(underscorifySubstring('testthis is a testtest to see if testestest it works', 'test'))  //_test_this is a _testtest_ to see if _testestest_ it works
