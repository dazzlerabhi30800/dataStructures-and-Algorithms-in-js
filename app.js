// function search(arr, n, x) {
//   let i;
//   for (i = 0; i < n; i++) if (arr[i] == x) return i;
//   return -1;
// }

// // Driver code

// let arr = [2, 3, 4, 10, 40];
// let x = 10;
// let n = arr.length;

// // Function call
// let result = search(arr, n, x);
// result == -1
//   ? document.write("Element is not present in array")
//   : document.write("Element is present at index " + result);

let linearsearch = (arr, size, key) => {
  if (size == 0) {
    return -1;
  } else if (arr[size - 1] == key) {
    // Return the index of found key
    return size - 1;
  } else {
    let ans = linearsearch(arr, size - 1, key);
    return ans;
  }
};

let main = () => {
  let arr = [5, 15, 6, 9, 4];
  let key = 15;
  let ans = linearsearch(arr, 5, key);
  if (ans == -1) {
    console.log("element not found");
  } else {
    console.log(`The element ${key} found at ${ans} index of the given array`);
  }
};

// main();

// Binary Search

// Iterative Approach

// function binarySearch(arr, x) {
//   let low = 0;
//   let high = arr.length - 1;
//   let mid;
//   while (high >= 1) {
//     mid = Math.floor((low + high) / 2);

//     if (arr[mid] == x) {
//       return mid;
//     } else if (arr[mid] < x) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// }

// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let x = 6;
// let result = binarySearch(arr2, x);

// Recursive Approach
// function binaryRecursiveSearch(arr, x, low, high) {
//   if (high >= 1) {
//     let mid = Math.floor((high + low) / 2);

//     if (arr[mid] == x) {
//       return mid;
//     } else if (arr[mid] > x) {
//       return binaryRecursiveSearch(arr, x, low, mid - 1);
//     } else {
//       return binaryRecursiveSearch(arr, x, mid + 1, high);
//     }
//   }
//   // we reach here when the element is not present in the array
//   return -1;
// }

let arr2 = [2, 3, 4, 10, 40];
let x = 10;
let hi = arr2.length - 1;
// let result = binaryRecursiveSearch(arr2, x, 0, hi);
// console.log(result);

// console.log(Math.floor(1 / 2));

// factorial function iterative approach
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  let fact = 1;
  for (var i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
// console.log(factorial(4));

// Binary Search Problem
// find the index of the numbers that matches the sum in the given array
function subArray(arr, sum, n) {
  let currentSum = arr[n - 1],
    start = n - 1,
    i;

  for (i = n - 2; i >= 0; i--) {
    while (currentSum > sum && start < i + 1) {
      currentSum = currentSum - arr[start];
      start--;
    }

    if (currentSum == sum) {
      let p = i;
      console.log({ p, start });
    }

    if (i < n) {
      currentSum = currentSum + arr[i];
    }
  }
  return -1;
}
const arr1 = [1, 2, 3, 7, 5];
const n = arr1.length;
// subArray(arr1, 12, n);

// FREECODECAMP ORG PROGRAMS
// Linear Search

const linearSearch = (arr, key) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
};
const verifyIndex = (index) => {
  if (index == -1) {
    console.log("Target not found");
  } else {
    console.log("Target found at index : ", index);
  }
};

const linearArray = [1, 2, 3, 4, 5, 6];
// const result = linearSearch(linearArray, 4);
// verifyIndex(result);

// Binary Search

// Iterative Approach
const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

const binaryArray = [1, 2, 4, 5, 6, 8, 9];
// console.log(binaryArray.slice(4));
// const result = binarySearch(binaryArray, 8);
// verifyIndex(result);
// console.log(result);

// Recursive Approach
const binaryRecursiveSearch = (arr, target, high, low) => {
  let mid;
  if (high < low) {
    return -1;
  }

  mid = Math.floor((high + low) / 2);

  if (arr[mid] == target) {
    return mid;
  } else {
    if (target > arr[mid]) {
      return binaryRecursiveSearch(arr, target, high, mid + 1);
    } else {
      return binaryRecursiveSearch(arr, target, mid - 1, low);
    }
  }
};

const high = binaryArray.length - 1;
const result = binaryRecursiveSearch(binaryArray, 9, high, 0);
verifyIndex(result);
// console
