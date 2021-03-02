function reverse(start, end, arr) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateArray(arr, k) {
  k %= arr.length;
  reverse(0, arr.length - 1, arr);
  reverse(0, k - 1, arr);
  reverse(k, arr.length - 1, arr);
  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
