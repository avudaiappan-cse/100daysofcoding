function moveZeros(arr) {
  let nonZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[nonZero];
      arr[nonZero] = arr[i];
      arr[i] = temp;
      nonZero++;
    }
  }
  return arr;
}

console.log(moveZeros([1]));
