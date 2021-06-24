function simpleArraySum(ar) {
  if (ar.length === 0) return 0;
  if (ar.length === 1) return ar[0];

  let elem = ar.pop();

  return elem + simpleArraySum(ar);
}

console.log( simpleArraySum([5, 3, 2, 10]) );