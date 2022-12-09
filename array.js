console.log("Array in Data Structures");

const newArr = [1, 4, 5, 8];
newArr.splice(1, 0, 9);
console.log(newArr);

function checkNumber(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return true;
    }
  }
  return false;
}

// console.log(checkNumber(newArr, 8));

const arr2 = [];
console.log(arr2.length);
