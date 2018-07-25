/*
Given a min-heap, write a function that will create a sorted LL using the values in that min heap. You must implement the Heap class as a part of this algorithm.

*/
function Node(value){
  this.value = value
  this.next = null
}

class Heap{
  constructor(){
    this.values = [null]
  }

  // Time: O(log(n)) time where n is the number of nodes in the tree
  // Space: O(1)
  remove(){
    this.swap(1, this.values.length - 1)
    let removedValue = this.values.pop()
    this.siftDown(1, this.values.length)
    return removedValue
  }

  // Time: O(log(n)) time where n is the number of nodes in the tree
  // Space: O(1)
  siftDown(currentIdx, endIdx){
    while (2 * currentIdx < endIdx){
      let newIdx = this.values[2 * currentIdx + 1] < this.values[2 * currentIdx]
        ? 2 * currentIdx + 1
        : 2 * currentIdx

      if (this.values[currentIdx] > this.values[newIdx]){
        this.swap(currentIdx, newIdx)
        currentIdx = newIdx
      } else {
        return
      }
    }
  }

  // Time: O(log(n)) time where n is the number of nodes in the tree
  // Space: O(1)
  siftUp(currentIdx){
    let parentIdx = Math.floor(currentIdx / 2)

    while (parentIdx > 0){
      if (this.values[currentIdx] < this.values[parentIdx]){
        this.swap(currentIdx, parentIdx)
        currentIdx = parentIdx
        parentIdx = Math.floor(currentIdx / 2)
      } else {
        return
      }
    }
  }

  // Time: O(m * log(n)) time where n is the number of nodes in the tree and m is the number of added new values
  // Space: O(1)
  insert(...newValues){
    newValues.forEach(newValue => {
      this.values.push(newValue)
      this.siftUp(this.values.length - 1)
    })
  }

  peek(){
    if (this.values[1]) return true
    return false
  }

  swap(idx1, idx2){
    let temp = this.values[idx1]
    this.values[idx1] = this.values[idx2]
    this.values[idx2] = temp
  }

}


const flattenHeap = (heap) => {
  if (!heap.peek()) return null

  let head = new Node(heap.remove()),
    currentNode = head

  while (heap.peek()){
    currentNode.next = new Node(heap.remove())
    currentNode = currentNode.next
  }

  return head
}


let heap1 = new Heap()
heap1.insert(8, 5, 7, 4, 1)
console.log(flattenHeap(heap1))  // 1->4->5->7->8

let heap2 = new Heap(1, 2, 1, 2)
heap2.insert(1, 2, 1, 2)
console.log(flattenHeap(heap2))  // 1->1->2->2
