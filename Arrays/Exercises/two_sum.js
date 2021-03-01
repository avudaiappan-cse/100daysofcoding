function twoSum(arr, target) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    const need = target - arr[i];
    if (hash.hasOwnProperty(need) && hash[need] !== i) {
      return [i, hash[need]];
    }
  }
}

console.log(twoSum([3, 3], 6));
