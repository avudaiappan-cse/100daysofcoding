function firstRecurringCharacter(arr) {
  const hash = {};
  for (const element of arr) {
    if (!hash.hasOwnProperty(element)) hash[element] = true;
    else return element;
  }
  return undefined;
}

console.log(firstRecurringCharacter([1, 2, 3, 4, 5, 3, 2]));
