function containsDuplicate(arr) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash.hasOwnProperty(arr[i])) return true;
    else hash[arr[i]] = true;
  }
  return false;
}
console.log(containsDuplicate([1, 2, 3, 1]));
