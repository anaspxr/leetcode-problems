var maxUniqueSplit = function (s) {
  const substrSet = new Set();
  let maxCount = 0;

  function backtrack(start) {
    if (start === s.length) {
      maxCount = Math.max(maxCount, substrSet.size);
      return;
    }

    for (let end = start + 1; end <= s.length; end++) {
      const substring = s.slice(start, end);
      if (!substrSet.has(substring)) {
        substrSet.add(substring);
        backtrack(end);
        substrSet.delete(substring);
      }
    }
  }

  backtrack(0);
  return maxCount;
};

console.log(maxUniqueSplit("abfajfafasza")); // 5
