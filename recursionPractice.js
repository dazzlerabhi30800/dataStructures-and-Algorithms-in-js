// Write a program to find the factorial
const factorial = (n) => {
  if (n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// console.log(factorial(6));

// Write a program to find the greatest common divisor(GCD)
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b); // at the second time calling the recursive function value of b will be 0 and hence the function will return a
};

// console.log(gcd(12, 24));

// Write a javascript program to find the numbers in range(x, y);
const range = (x, y) => {
  if (y - x === 2) {
    return [x + 1];
  } else {
    var list = range(x, y - 1);
    list.push(y - 1);
    return list;
  }
};
const range2 = (x, y) => {
  return x === y ? [x] : range(x, y - 1).concat(y - 1);
};

// console.log(range2(2, 8));

// Write a program to compute the sum of an array of integers
const sumArray = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.shift() + sumArray(arr);
  }
};

const array = [1, 2, 3, 4, 5];
// console.log(sumArray(array));

// Write a program to compute the exponent of a given number
const exponent = (n, e) => {
  // return n ** e;
  if (e == 0) {
    return 1;
  } else {
    return n * exponent(n, e - 1);
  }
};

console.log(exponent(2, 4));
