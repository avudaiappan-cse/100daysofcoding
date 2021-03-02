function maximumSubarray(arr) {
  let currentSum = 0;
  let maximum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maximum) maximum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }
  return maximum;
}

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
