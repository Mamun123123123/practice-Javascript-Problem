function fibonacci(n) {
  let series = [0, 1];

  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }


  return series.slice(0, n);
}

console.log(fibonacci(7));


function secondLargest(arr) {
  let uniqueArr = [...new Set(arr)];

  uniqueArr.sort((a, b) => b - a);

  return uniqueArr[1];
}



console.log(secondLargest([10, 5, 8, 20, 15]));