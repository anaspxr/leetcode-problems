var resultsArray = function (nums, k) {
  const res = [];
  for (let i = 0; i <= nums.length - k; i++) {
    let flag = true;
    const test = [];
    for (let j = i; j < i + k - 1; j++) {
      if (nums[j] + 1 !== nums[j + 1]) {
        flag = false;

        // break;
      }
      test.push(nums[j]);
    }

    res.push(flag ? nums[i + k - 1] : -1);
  }
  return res;
};

console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3));
