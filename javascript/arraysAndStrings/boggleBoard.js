/*

You are given a metrix of potentially unequal height and width containing letters. This matrix represents a boggle board. You are
also given a list of words. Write a function that returns all the words in the boggle board. A word is constructed by connecting
vertically, horizontally, or diagonally adjacent letters. A letter cannot be used twice for the same word.

Time: O(m * n) - where m is the number of rows in the boggle board and n is the number of columns in the board
Space: O(w) - where w is the length of the words array

*/


const boggleBoard = (board, words) => {

    let hashMap = {},
        outputArr = []

    words.forEach(word => {
        if (hashMap[word[0]]) hashMap[word[0]].push(word)
        else hashMap[word[0]] = [word]
    })

    for (let row = 0; row < board.length; row++){
        for (let column = 0; column < board[row].length; column++){
            if (hashMap[board[row][column]]){
                for (let idx = 0; idx < hashMap[board[row][column]].length; idx++){
                    let word = hashMap[board[row][column]][idx]
                    if (word && checkAdjacentLetters(board, row, column, word, 1, [[row, column]])){
                        outputArr.push(word)
                        hashMap[board[row][column]][idx] = null
                    }
                }
            }
        }
    }

    return outputArr
}

function checkAdjacentLetters(board, row, column, str, strIdx, previousBoardSpots = []){

    if (strIdx === str.length) return true

    let bool = false,
        neighbors = [[row, column - 1], [row, column + 1], [row - 1, column - 1], [row - 1, column], [row - 1, column + 1], [row + 1, column - 1], [row + 1, column], [row + 1, column + 1]]

    for (let i = 0; i < neighbors.length; i++){
        if (!bool && board[neighbors[i][0]] && board[neighbors[i][0]][neighbors[i][1]] === str[strIdx] && isUnusedIdx(neighbors[i][0], neighbors[i][1], previousBoardSpots)){
            bool = checkAdjacentLetters(board, neighbors[i][0], neighbors[i][1], str, strIdx + 1, previousBoardSpots.concat([[neighbors[i][0], neighbors[i][1]]]))
        }
    }


    return bool
}

function isUnusedIdx(row, column, previousIdxs){
    for (let i = 0; i < previousIdxs.length; i++){
        if (previousIdxs[i][0] === row && previousIdxs[i][1] === column){
            return false
        }
    }

    return true
}

const board = [
    ['y', 'g', 'f', 'y', 'e', 'i'],
    ['c', 'o', 'r', 'p', 'o', 'u'],
    ['j', 'u', 'z', 's', 'e', 'l'],
    ['s', 'y', 'u', 'r', 'h', 'p'],
    ['e', 'a', 'e', 'g', 'n', 'd'],
    ['h', 'e', 'l', 's', 'a', 't']
]


const words = ['san', 'sana', 'at', 'vomit', 'yours', 'help', 'end', 'been', 'bed', 'danger', 'calm', 'ok', 'chaos', 'complete', 'rear', 'going', 'storm', 'face', 'epual', 'dangerous']


console.log(boggleBoard(board, words))  // ['yours', 'help', 'danger', 'san', 'at']
