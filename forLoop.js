console.log("for loop in js");

function checkLoop(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      console.log(i);
      return false;
    }
  }
  return true;
}

// let arr = [3, 4, 5, 6, 9];
let arr = [3, 4, 5, 9, 6];
arr = checkLoop(arr);
console.log(arr);
