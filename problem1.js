function findMissing(arr, n) {
  let total = (n * (n + 1)) / 2;

  let sum = arr.reduce((acc, curr) => acc + curr, 0);

  return total - sum;
}

console.log(findMissing([1, 2, 3, 5], 5));