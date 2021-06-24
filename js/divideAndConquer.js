function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    const lastItem = arr.pop();

    return lastItem + sum(arr);
  }
}

function sum2(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

console.log( sum([2, 4]) );
console.log( sum2([2, 4]) );