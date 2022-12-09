console.log("merge sort");

const sort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;

      i = -1;
    }
  }
  return arr;
};

// const mergeSort = (arr) => {
//   // Sort the array in ascending order
//   // return a new sorted array
//   // Divide : Find the midpoint of the array and divide into subarrays
//   // Conquer : Recursively sort the subarrays created in previous step
//   // Combine : Merge the sorted the subarray created in previous Step

//   if (arr.length <= 1) {
//     return arr;
//   }

//   let [leftHalf, rightHalf] = split(arr);
//   console.log(leftHalf);
//   let left = mergeSort(leftHalf);
//   let right = mergeSort(rightHalf);

//   return merge(left, right);
// };

// const split = (arr) => {
//   // Divide the  unsorted array at point into subarrays and will return two subarrays left and right

//   let mid = Math.floor(arr.length / 2);
//   let left = arr.splice(mid);
//   let right = arr.splice(0, mid);

//   return [left, right];
// };

// const merge = (left, right) => {
//   // Merges two list (arrays), sorting them in the process
//   // Return a new merged list

//   let l = [];
//   let i = 0;
//   let j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       l.push(left[i]);
//       i += 1;
//     } else {
//       l.push(right[j]);
//       j += 1;
//     }
//   }

//   while (i < left.length) {
//     l.push(left[i]);
//     i += 1;
//   }
//   while (j < right.length) {
//     l.push(right[j]);
//     j += 1;
//   }
// };

const merge = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
};

const mergeSort = (arr) => {
  // Base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  // Recursive Calls
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

// const arr1 = [1, 4, 3, 2, 5];
// console.log(mergeSort(arr1));

const mergeSortIterative = (arr, n) => {
  var curr_size;

  var left_start;

  for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
    for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
      var mid = Math.min(left_start + curr_size - 1, n - 1);
      var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);

      mergeIterative(arr, left_start, mid, right_end);
    }
  }

  return arr;
};

const mergeIterative = (arr, l, m, r) => {
  var i, j, k;
  var n1 = m - l + r;
  var n2 = r - m;

  // create temp arrays
  var L = Array(n1).fill(0);
  var R = Array(n2).fill(0);

  // copy data to temp arrays L and R
  for (i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  // Merge the temp arrays back into arr
  i = 0;
  j = 0;
  k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of L, if there are many
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  // Copy the remaining elements of L, if there are many
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
};

const arr1 = [1, 4, 3, 2, 8];
const n = arr1.length;
console.log("sorted Array is");
console.log(mergeSortIterative(arr1, n));
