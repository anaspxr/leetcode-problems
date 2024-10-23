var findDisappearedNumbers = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  const length = nums.length;
  let prev = 0;
  for (let i = 0; i < length; i++) {
    if (nums[i] > nums[i - 1] + 1) {
      for (let j = nums[i - 1] + 1; j < nums[i]; j++) {
        res.push(j);
      }
    }
  }
  if (nums[length - 1] !== length) {
    for (let i = nums[length - 1] + 1; i <= nums.length; i++) {
      res.push(i);
    }
  }
  return res;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
