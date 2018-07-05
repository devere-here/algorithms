/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it is able to trap after raining. For example,
 * Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
 */


const findWaterArea = (heights) => {

    let waterArea = 0,
        waterLevel,
        left,
        right

    heights.forEach((height, idx) => {
        if (idx + 1 < heights.length){

            left = heights.slice(0, idx + 1)
            right = heights.slice(idx + 1)
            waterLevel = Math.min(Math.max(...left), Math.max(...right))

            if (waterLevel > height) waterArea += waterLevel - height
        }

    })

    return waterArea
}

console.log(findWaterArea([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))

