var countFairPairs = function (nums, lower, upper) {
  const sorted = nums.sort((a, b) => a - b);
  let count = 0;
  let currentMax = nums.length - 1;

  console.log(sorted);

  for (let i = 0; i < sorted.length - 1; i++) {
    const difference = upper - sorted[i];
    console.log("difference", difference);
    console.log("currentMax", currentMax);

    for (let j = currentMax; j > i + 1; j--) {
      if (sorted[j] <= difference) {
        currentMax = j;
        let k = i;

        while (sorted[k] + sorted[i] < lower) {
          k++;
        }

        console.log("j", j);
        console.log("k", k);
        console.log(j - k + 1);

        count += j - k + 1;
        break;
      }
    }
  }
  return count;
};

console.log(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6)); // 10
