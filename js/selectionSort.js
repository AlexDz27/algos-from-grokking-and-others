function selectionSort(values) {
  const sortedValues = [];
  const initialValueLength = values.length;

  let found = null;

  for (let i = 0; i < initialValueLength; i++) {
    let pivot = values[i];

    for (let j = 0; j < values.length; j++) {
      const compared = values[j];

      if (pivot > compared) {
        pivot = compared;
        found = j;
      }
    }

    sortedValues.push(pivot);
    if (found) {
      values.splice(found, 1);
    } else {
      values.splice(i, 1);
    }
  }

  return sortedValues;
}

const values = [5, 1, 8, 12, 100, 13, 200, 55];

function selectionSort2(values) {
  const sortedValues = [];
  
  const initialValuesLength = values.length;
  
  for (let i = 0; i < initialValuesLength; i++) {
    let pivot = values[i];
    
    for (let j = 0; j < values.length; j++) {
      const compared = values[j];
      
      if (pivot > compared) {
        pivot = compared;
        values.splice(j, 1);
      }
    }

    sortedValues.push(pivot);
  }

  return sortedValues;
}

const values2 = [4, 1, 2, 5];
const values3 = [5, 3, 6, 2, 10, -10];

function selectionSort3(values) {
  const sortedValues = [];

  while (values.length > 0) {
    let smallestIdx = 0;
    let smallest = values[smallestIdx];

    for (let j = 1; j < values.length; j++) {
      const compared = values[j];

      if (smallest > compared) {
        smallest = compared;
        smallestIdx = j;
      }
    }

    sortedValues.push(smallest);
    values.splice(smallestIdx, 1);
  }

  return sortedValues;
}

console.log( selectionSort3(values3) );