

const findFirstTarget = (arr, target, start = 0, end = arr.length - 1, lastTargetIdx = null) => {
  
    let mdpt = Math.floor((start + end) / 2)
    
    if (arr[mdpt] >= target){
      lastTargetIdx = arr[mdpt] === target ? mdpt : lastTargetIdx
      if (start <= mdpt - 1) lastTargetIdx = findFirstTarget(arr, target, start, mdpt - 1, lastTargetIdx)
    } else if (end >= mdpt + 1) {
      lastTargetIdx = findFirstTarget(arr, target, mdpt + 1, end, lastTargetIdx)  
    }
    
    return lastTargetIdx
  }
  
  // [1, 2, 4, 4]
  
  console.log(findFirstTarget([1, 2, 4, 4], 2))