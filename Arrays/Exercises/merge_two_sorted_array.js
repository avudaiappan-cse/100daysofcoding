function mergeSortedArray(arr1, arr2) {
  let pointer1 = 0;
  let pointer2 = 0;
  const newArray = [];
  while (pointer1 < arr1.length || pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      newArray.push(arr1[pointer1]);
      pointer1 += 1;
    } else {
      newArray.push(arr2[pointer2]);
      pointer2 += 1;
    }
  }
  while (pointer1 < arr1.length) {
    newArray.push(arr1[pointer1]);
    pointer1 += 1;
  }
  while (pointer2 < arr2.length) {
    newArray.push(arr2[pointer2]);
    pointer2 += 1;
  }
  return newArray;
}

console.log(mergeSortedArray([1, 4, 5, 7], [2, 3, 10, 11]));
