/**
 * Write a function that takes an array of unique intergers and returns its powerset
 */

const powerset = arr => {
    let collection = [[]]

    arr.forEach(integer => {
        let newAdditions = []
        collection.forEach(set => {
            newAdditions.push(set.concat(integer))
        })
        collection = collection.concat(newAdditions)
    })

    return collection
}

console.log(powerset([1, 2, 3]))
