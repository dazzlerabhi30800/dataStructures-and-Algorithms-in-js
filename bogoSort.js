console.log("bogo sort in js");

function isSorted(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

function swap(arr, xp, yp) {
  let temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function shuffle(arr, n) {
  var i,
    j = n;
  for (var i = 0; i < n; i++) {
    var ind = Math.floor(Math.random() * n);
    console.log("the index is");
    console.log(ind);
    swap(arr, j - i - 1, ind);
  }
  return arr;
}

function bogoSort(arr, n) {
  while (!isSorted(arr, n)) {
    arr = shuffle(arr, n);
  }
  return arr;
}

let arr = [3, 2, 5, 1, 0, 4];
let n = arr.length;
arr = bogoSort(arr, n);
console.log(arr);
