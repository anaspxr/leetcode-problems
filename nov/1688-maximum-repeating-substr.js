var maxRepeating = function (sequence, word) {
  let k = 0;
  let max = 0;
  const wl = word.length;
  for (let i = 0; i < sequence.length - wl; i++) {
    if (sequence.slice(i, i + wl) === word) {
      k++;
      i = i + wl - 1;
    } else {
      max = Math.max(k, max);
      k = 0;
    }
  }
  max = Math.max(k, max);
  return max;
};

console.log(maxRepeating("ababc", "ab")); // 2
