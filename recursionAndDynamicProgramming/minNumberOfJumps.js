/**
 *
 *  Given an array of integers where each element represents the max number of steps that can
 *  be made forward from that element. Write a function to return the minimum number of jumps
 * to reach the end of the array (starting from the first element). If an element is 0, then
 * we cannot move through that element.
 * 
 */


const minNumberOfJumps = array => {
    let minJumpArray = new Array(array.length).fill(Infinity)
    minJumpArray[0] = 0

    for (let i = 0; i < array.length - 1; i++){
        let jumpDistance = array[i],
            jumpFromIdx = minJumpArray[i] + 1

        for (let j = 1; j <= jumpDistance; j++) {
            if (i + j < array.length){
                minJumpArray[i + j] = Math.min(minJumpArray[i + j], jumpFromIdx)
            }

        }
    }

    return minJumpArray.pop()
}
