const binarySearchRecursive = (arr, target, low, high) => {
  while (high >= low) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      return binarySearchRecursive(arr, target, low, mid - 1);
    } else {
      return binarySearchRecursive(arr, target, mid + 1, high);
    }
  }
  return -1;
};
const verifyIndex = (index) => {
  console.log("The element is found at index " + index);
};

const arr = [1, 2, 3, 4, 5];
const target = 5;
const low = 0;
const high = arr.length - 1;
const result = binarySearchRecursive(arr, target, low, high);
verifyIndex(result);
