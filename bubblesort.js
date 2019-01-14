function swap(numArray, i, j) {
  let swapNum = numArray[j]
  numArray[j] = numArray[i]
  numArray[i] = swapNum
}

function bubbleSort(numArray) {
  let anySwaps = true
  let top = numArray.length - 1
  while (top>0) {//anySwaps === true) {
    anySwaps = false
    for (let i = 0; i < top; i++) {
      if (numArray[i] > numArray[i + 1]) {
        swap(numArray, i, i+1)
        anySwaps = true
      }
    }
    top--
  }
  console.log(numArray)
  return numArray
}
