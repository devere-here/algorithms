/*
Imagine a robot ditting on the upper left corner of a grid of r rows and c columns. The robot can only move in two
directions right or down, but certain cells are off limits such that the robot cannot step on them. Design an algorith
to find a path for the robot to go from the top left to the bottom right.

Time: O((r + c) * n) - where r is the number of rows, c is the number of columns and n is the length of the offLimitPosition array.
Space: O((r + c)^2) - each recursive call can have up to O(r + c) space complexity due to the space taken up by the currentPath
array. And there will be about r + c recursive calls
*/


const robotOnAGrid = (gridSize, offLimitPositions, currentPath = [], currentPosition = [0, 0]) => {

    if (currentPosition[0] === gridSize[0] - 1 && currentPosition[1] === gridSize[1] - 1){
        return currentPath
    }

    let finalPath = null,
        nextPosition = [currentPosition[0] + 1, currentPosition[1]]


    if (nextPosition[0] < gridSize[0] && validPosition(nextPosition, offLimitPositions)){
        finalPath = robotOnAGrid(gridSize, offLimitPositions, currentPath.concat('down'), nextPosition)
    }

    nextPosition = [currentPosition[0], currentPosition[1] + 1]

    if (!finalPath && nextPosition[1] < gridSize[1] && validPosition(nextPosition, offLimitPositions)){
        finalPath = robotOnAGrid(gridSize, offLimitPositions, currentPath.concat('right'), nextPosition)
    }

    return finalPath
}


function validPosition(nextPosition, offLimitPositions){
    for (let i = 0; i < offLimitPositions.length; i++){
        if (offLimitPositions[i][0] === nextPosition[0] && offLimitPositions[i][1] === nextPosition[1]){
            return false
        }
    }

    return true
}

console.log(robotOnAGrid([3, 3], [[1, 1], [1, 0]]))  // return ['right', 'right', 'down', 'down']

console.log(robotOnAGrid([3, 3], [[0, 1], [1, 0]]))  // return null

console.log(robotOnAGrid([4, 4], [[1, 1], [1, 0], [0, 3], [2, 2]]))  // return ["right", "right", "down", "right", "down", "down"]
