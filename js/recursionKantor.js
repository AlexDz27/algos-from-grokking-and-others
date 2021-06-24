function fib(n) {
  const nums = [1, 1];

  for (let i = 2; i <= n; i++) {
    let nextFibNum = nums[i - 1] + nums[i - 2];

    nums[i] = nextFibNum;
  }

  return nums[n - 1];
}

console.log( fib(77) )

function fibR(n) {
  if (n <= 2) {
    return 1;
  }

  return fibR(n - 1) + fibR(n - 2);
}

console.log( fibR(77) )