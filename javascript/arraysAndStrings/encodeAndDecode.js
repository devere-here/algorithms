/*
Write a encoding function that will take an array of strings that can contain any ASCII character (letters, numbers, symbols, etc) and will return a single encoded string. Then create a decoding function that can take the encoded string and return the oringinal array of strings

Encode
    Time: O(n * m) where n is the length of the strArr and m is the average length of the strings
    Space:  O(n * m) where n is the length of the strArr and m is the average length of the strings

Decode
    Time: O(n * m) where n is the length of the original strArr and m is the average length of the strings
    Space: O(n * m) where n is the length of the original strArr and m is the average length of the strings

*/


const encode = (strArr) => {
    let encodedStr = ''

    strArr.forEach(string => {
        encodedStr += `${string.length}#`
        for (const idx in string){
            let charCode = string.charCodeAt(+idx) + 5 % 125
            encodedStr += String.fromCharCode(charCode)
        }
    })

    return encodedStr
}

const decode = (str) => {
    let decodedArr = [],
        start = 0

    while (start < str.length){

        let pound = str.indexOf('#', start),
            numCharInLength = pound - start,
            strlength = +str.substr(start, numCharInLength),
            substring = str.substr(start + numCharInLength + 1, strlength)

        decodedArr.push(decryptSubString(substring))
        start = start + 1 + numCharInLength + strlength
    }

    return decodedArr
}

function decryptSubString(string){
    let decryptedStr = ''

    for (const idx in string){
        let charCode = string.charCodeAt(+idx) - 5
        if (charCode < 0) charCode += 125
        decryptedStr += String.fromCharCode(charCode)
    }

    return decryptedStr
}

let test1 = encode(['cat', 'koala', 'aardvark'])  // '3#hfy5#ptfqf8#ffwi{fwp'
console.log(decode(test1))  // ['cat', 'koala', 'aardvark']

let test2 = encode(['57847', '', '$%#@^'])  // 5#:<=9<0#5#)*(Ec
console.log(decode(test2))  // ["57847", "", "$%#@^"]
