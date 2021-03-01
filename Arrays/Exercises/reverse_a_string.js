function reverseAString(str) {
  newStringArr = [];
  for (let i = str.length - 1; i > -1; i--) {
    newStringArr.push(str[i]);
  }
  const newString = arrToStr(newStringArr);
  return newString;
}

function arrToStr(arr) {
  string = "";
  for (let i = 0; i < arr.length; i++) {
    string += arr[i];
  }
  return string;
}

console.log(reverseAString("Hello, Buddy"));
