function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr.shift();

  const smaller = [];
  const bigger = [];
  for (let i = 0; i < arr.length; i++) {
    pivot > arr[i] ? smaller.push(arr[i]) : bigger.push(arr[i]);
  }

  return quickSort(smaller).concat(pivot, quickSort(bigger));
}

console.log( quickSort([33, 15, 10, 42, 40, 38]) )