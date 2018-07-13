/*
Write a function that takes in a big string and an array of small strings. The function should return an array of booleans
where each boolean represents whether or not the small string at that index is in the big string. Can't use any language built in
string searching methods.

Time: O(b + s) where b is the length of the big string and s is the length of the small string array
Space: O(s)
*/


const multiStringSearch = (bigString, smallStrings) => {

    let hashMap = {},
        containsArr = new Array(smallStrings.length).fill(false)

    smallStrings.forEach(string => {
        if (hashMap[string[0]]) hashMap[string[0]].push(string)
        else hashMap[string[0]] = [string]
    })

    for (let idx = 0; idx < bigString.length; idx++){
        if (hashMap[bigString[idx]]){
            hashMap[bigString[idx]].forEach(word => {
                let length = word.length,
                    substring = bigString.substring(idx, idx + length)

                if (substring === word){
                    containsArr[smallStrings.indexOf(word)] = true
                }
            })
        }
    }

    return containsArr
}

console.log(multiStringSearch('this is a big string', ['cat']))  // [false]
console.log(multiStringSearch('this is a big string', ['this', 'yo', 'is', 'a', 'bigger', 'string', 'kappa']))  // [true, false, true, true, false, true, false]
console.log(multiStringSearch('mary goes to the shopping center every week', ['to', 'Mary', 'centers', 'shop', 'shopping', 'string', 'kappa']))  // [true, false, false, true, true, false, false]
