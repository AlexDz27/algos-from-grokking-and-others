const binarySearchValues = [1, 3, 5, 10, 15, 20, 22, 30];

// Попробовать еще решить рекурсией
function binarySearch2(values, target) {
  let minPos = 0;
  let maxPos = values.length - 1;

  while (minPos <= values.length - 1 && maxPos >= 0) {
    const middlePos = Math.floor( (minPos + maxPos) / 2 );

    const guessValue = values[middlePos];

    if (guessValue === target) return middlePos;

    if (guessValue > target) {
      maxPos = middlePos - 1;
    }

    if (guessValue < target) {
      minPos = middlePos + 1;
    }
  }

  return null;
}

// console.log( binarySearch2(binarySearchValues, 1) );
// console.log( binarySearch2(binarySearchValues, 3) );
// console.log( binarySearch2(binarySearchValues, 5) );
// console.log( binarySearch2(binarySearchValues, 10) );
// console.log( binarySearch2(binarySearchValues, 15) );
// console.log( binarySearch2(binarySearchValues, 20) );
// console.log( binarySearch2(binarySearchValues, 22) );
//
// console.log( binarySearch2(binarySearchValues, 30) );

// console.log( binarySearch2(binarySearchValues, 31) );
// console.log( binarySearch2(binarySearchValues, 62) );
// console.log( binarySearch2(binarySearchValues, -1) );
