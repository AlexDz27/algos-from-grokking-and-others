function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];

      if (sum === target) return [i, j];
    }
  }

  return null;
}

console.log( twoSum([3,2,3], 6) );
console.log( twoSum([2,7,11,15], 9) );