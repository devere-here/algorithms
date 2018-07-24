/*
You are given a string and two numbers between 2 and 16. The str is the string representation of a number in the first
base size. You must convert that string into a string representation of the number in the second base size.

*/

const baseConverter = (num, base1, base2) => {
    let isNegative = num[0] === '-' ? 1 : 0,
        base10Num = 0,
        exp = 0,
        cache = {
            'a': 10,
            'b': 11,
            'c': 12,
            'd': 13,
            'e': 14,
            'f': 15,
            10: 'a',
            11: 'b',
            12: 'c',
            13: 'd',
            14: 'e',
            15: 'f'
        }

    for (let i = num.length - 1; i >= isNegative; i--){
        let digit = cache[num[i]] ? cache[num[i]] : num[i]
        digit = +digit * (Math.pow(base1, exp))
        base10Num += digit
        exp++
    }

    let finalNum = ''

    while (base10Num >= base2){
        let remainder = base10Num % base2
        remainder = cache[remainder] ? cache[remainder] : remainder

        finalNum = remainder.toString() + finalNum
        base10Num = Math.floor(base10Num / base2)
    }

    finalNum = base10Num.toString() + finalNum

    return finalNum

}

console.log(baseConverter('c', 15, 10))  // 12
console.log(baseConverter('101', 2, 5))  // 10
console.log(baseConverter('b', 16, 5))  // 21
