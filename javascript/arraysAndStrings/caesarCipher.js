/*
    Given a non-empty string and a positive integer. Write a function that returns a new string obtained by 
    shifting every letter by k positions in the alphabet. Letters should wrap around the alphabet. So z 
    shifted by 1 would be a.
    Time: O(n) - where n is the length of the string
    Space: O(n) - where n is the length of the string
*/

const caesarCipherEncryptor = (string, key) => {
    let encryptedArr = []
    key = key % 26

    for (let i = 0; i < string.length; i++){
        let code = string.charCodeAt(i) + key
        if (code > 122){
            let difference = code - 122
            code = 96 + difference
        }
        encryptedArr.push(String.fromCharCode(code))	
    }
    return encryptedArr.join('')
}

console.log(caesarCipherEncryptor('helloworld', 15))  // wtaadldgas
console.log(caesarCipherEncryptor('catsarecool', 1))  // dbutbsfdppm
