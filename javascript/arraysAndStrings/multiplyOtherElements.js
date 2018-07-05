/*
You are given an array of numbers and you must return an array of products
where each index is the product of all the numbers in the first array not including
the number at that index in the oringinal array. You cannot use division.

*/

/*
Time: O(n)
Space: O(n)
*/

const arrayOfProducts = arr => {
    let value = 1,
        productArray = []

    for (let i = 0; i < arr.length; i++){
        productArray[i] = value
        value *= arr[i]
    }

    value = 1

    for (let j = arr.length - 1; j >= 0; j--){
        productArray[j] *= value
        value *= arr[j]
    }

    return productArray
}

console.log('arrayOfProducts', arrayOfProducts([1, 7, 3, 4]))
