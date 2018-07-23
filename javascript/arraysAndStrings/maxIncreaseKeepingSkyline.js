var maxIncreaseKeepingSkyline = function(grid) {

    let maxRows = {},
        maxColumns = {},
        counter = 0

    for (let j = 0; j < grid[0].length; j++){
        let columnArr = []
        for (let k = 0; k < grid.length; k++){
            columnArr.push(grid[k][j])
            maxRows[k] = Math.max(...grid[k])
        }
        maxColumns[j] = Math.max(...columnArr)
    }

    for (let x = 0; x < grid.length; x++){
        for (let y = 0; y < grid[x].length; y++){
            let maxHeight = Math.min(maxRows[x], maxColumns[y])
            counter += maxHeight - grid[x][y]
        }
    }

    return counter

}


console.log(maxIncreaseKeepingSkyline([ [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0] ]))
