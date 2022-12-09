console.log("The quick sort in js");

const swap = (items, left, right) => {
  var temp = items[left];
  items[left] = items[right];
  items[right] = temp;
};

const partition = (items, left, right) => {
  var pivot = items[Math.floor((left + right) / 2)];
  var i = left;
  var j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    while (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
};

const quickSort = (items, left, right) => {
  if (items.length > 1) {
    let index = partition(items, left, right);

    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
};

// first call to quick sort
var items = [5, 3, 7, 6, 2, 9];
// console.log(items.length - 1);
var sortedArray = quickSort(items, 0, items.length - 1);

console.log(sortedArray);
