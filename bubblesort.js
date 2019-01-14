function bubbleSort(numArray) {
  let swap = true
  let top = numArray.length - 1
  while (swap === true) {
    swap = false
    for (let i = 0; i < top; i++) {
      if (numArray[i] > numArray[i + 1]) {
        let swapNum = numArray[i + 1]
        numArray[i + 1] = numArray[i]
        numArray[i] = swapNum
        swap = true
      }
    }
    top--
  }
  console.log(numArray)
  return numArray
}
