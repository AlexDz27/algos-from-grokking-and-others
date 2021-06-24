// function countdown(i) {
//   console.log(i);
//   if (i === 1) {
//     return;
//   }
//
//   countdown(--i);
// }
//
// countdown(3);

function factorial(n) {
  if (n <= 1) return n;

  let result = n * factorial(--n);

  return result;
}

console.log( factorial(0) )