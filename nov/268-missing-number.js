var missingNumber = function (nums) {
  const length = nums.length;
  const sum = (length * (length + 1)) / 2;
  const arraySum = nums.reduce((acc, x) => acc + x, 0);
  return sum - arraySum;
};

console.log(missingNumber([3, 0, 1])); // 2
