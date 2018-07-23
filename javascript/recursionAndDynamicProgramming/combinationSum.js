/*
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Time: O(s * t) - where s is the number of number of the set and t is the target number
Space: O(t)
*/

var combinationSum = function(candidates, target) {
    let array = new Array(target + 1)

    for (let i = 0; i < array.length; i++){
        array[i] = []
    }

    for (let idx = 1; idx <= target; idx++){
        candidates.forEach(setEle => {
            if (setEle === idx){
                if (!array[idx].length){
                    array[idx] = [[setEle]]
                } else {
                    array[idx] = array[idx].concat([[setEle]])
                }
            } else if (setEle < idx){
                let previousArr = array[idx - setEle]
                for (let j = 0; j < previousArr.length; j++){
                    let lastIdx = previousArr[j].length - 1,
                        lastEle = previousArr[j][lastIdx],
                        sum = previousArr[j].reduce((a, b) => a + b)
                    if (setEle >= lastEle && sum + setEle === idx){
                        array[idx].push(previousArr[j].concat(setEle))
                    }
                }
            }

        })
    }

    return array.pop()
}

let set = new Set()
set.add(2).add(3).add(5)

console.log(combinationSum(set, 8))  // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

let set2 = new Set()
set2.add(2).add(3).add(6).add(7)

console.log(combinationSum(set2, 7))  // [[2, 2, 3], [7]]
