/*
Given a staircase of a certain amount of steps and an array of the lengths
of the possible steps you can take. Return the number of different combinations
of steps you can take to get to the top of the staircase

Time: O(n * h) - where n is the length of the stepArr and h is the height of the staircase
Space: O(h)

*/

const waysUpStairCase = (height, stepArr) => {
    let waysToGetThere = [1]

    for (let currentHeight = 1; currentHeight <= height; currentHeight++){
        let totalSum = 0
        for (let stepIdx = 0; stepIdx < stepArr.length; stepIdx++){
            if (currentHeight >= stepArr[stepIdx]){
                totalSum += waysToGetThere[currentHeight - stepArr[stepIdx]]
            }
        }
        waysToGetThere.push(totalSum)
    }

    return waysToGetThere.pop()
}

console.log(waysUpStairCase(3, [1]))  // 1
console.log(waysUpStairCase(5, [1, 2, 3])) // 13
console.log(waysUpStairCase(4, [5]))  // 0
