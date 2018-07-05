function root(x, n) {
    // your code goes here
    
    /*
    x = 7
    n = 3
    
    */
    
    let max = x,
        min = 0,
        midpoint = (max + min) / 2,
        value
    
    while (true){
      
      value = Math.pow(midpoint, n)
      
      if (Math.abs(value - x) <= 0.001){
        return midpoint.toFixed(3)
      }
      else if (value < x){ 
        min = midpoint
      }
      else if (value > x){
        max = midpoint
      }
  
      midpoint = (max + min) / 2   
    }
   
     
}

console.log(root(0.5, 2))




/*
given arr of ints function that returns arr length of 2. First element should be integer value representing greatest sum that can be generated from a increasing subsequece
second element is the numbers in the subsequences


[2, -3, 5, 6, 4] --> 13
[10, 70, 20, 30, 50, 11, 30]

[10, 50, 11, 12, 50, 13, 14, 50, 15]



[10, 80, 30, 60, 110, 21, 60]
[{lastNumber: 10, sum: 10}, {lastNumber: 70, sum: 70}, {lastNumber: 20, sum: 30}, 
{lastNumber: 30, sum: 60}, {lastNumber: 50, sum: 110, elements: []}]

maxSum: 110
elemOfMaxSum: []

[[40, 110, 110, 110, 110,110, 110],
 70, 70, 70, 70, 70, 70],
 [30, 30, 80, 80, 80],
 []]
 
 set MaxSum 0
 elemOfMaxSum []
 
 
 
 [[], [0], [0], [0, 2], [0, 2, 3], []]

*/




const increasingSubSequence = arr => {
    let longestSubsequence = {
      sum: 0,
      elements: []
    }
    
    for (let i = 0; i < arr.length; i++){
      for (let j = i; j < arr.length; j++){
        let subsequence = findSum(arr, i, j)
        
      }
    }
  }
  
  
  const findSum = (arr, start, end) => {
    let sum = 0,
        elements = [],
        lastNumber = 0
    
    for (let k = start; k <= end; k++){
      if (arr[k] > lastNumber){
        sum += arr[k]
        elements.push(arr[k])
        lastNumber = arr[k]
      }   
    }
    
    return {
      sum,
      elements
    }
  }
  
  const compareSequences = (maxSequence, currentSequence) => {
    if (currentSequence.sum > maxSequence.sum) return currentSequence
    
    return maxSequence
    
    
  }
