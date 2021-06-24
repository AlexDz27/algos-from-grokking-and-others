function filterArr(arr) {
  if (arr.length <= 1) return arr;

  if (arr.length === 2) {
    const a = arr[0];
    const b = arr[1];

    if (a > b) {
      arr[0] = b;
      arr[1] = a;
    }
  }


}

console.log( filterArr([3, 2, 1, 5, -10, 4]) )