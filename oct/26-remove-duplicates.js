var removeDuplicates = function (nums) {
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    console.log(nums[i], prev);

    if (nums[i] === prev) {
      nums.splice(i, 1);
    } else prev = nums[i];
  }
  console.log(nums);

  return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
