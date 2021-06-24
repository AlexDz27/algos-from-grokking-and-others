function count(arr) {
  if (arr[0] === undefined) {
    return 0;
  }

  arr.pop();

  return 1 + count(arr);
}

console.log( count([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) );

function findBiggestNumber(arr) {
  if (arr.length === 0) return 0;

  if (arr.length === 1) return arr[0];

  const biggest = arr[0];
  const compared = arr[1];

  if (biggest < compared) {
    arr.splice(0, 1);
  } else {
    arr.splice(1, 1);
  }

  return findBiggestNumber(arr);
}

console.log( findBiggestNumber([5, 3, 10, 15]) )

function max(arr) {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }

  const num = arr[0];
  arr.splice(0, 1);

  const subMax = max(arr);

  return num > subMax ? num : subMax;
}

console.log( max([4, 6, 2, 0, -1, 10, 5, 100, 3]) )

