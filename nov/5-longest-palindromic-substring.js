var longestPalindrome = function (s) {
  for (let i = s.length - 1; i > 0; i--) {
    for (let start = 0, end = i; end < s.length; start++, end++) {
      let flag = true;
      const mid = Math.floor(end / 2);
      for (let k = start; k <= mid; k++) {
        console.log(s[k], s[end - k]);
        if (s[k] !== s[end - k]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        return s.slice(start, end % 2 === 0 ? end + 1 : end);
      }
    }
  }
  return s[0];
};

console.log(longestPalindrome("malayalm")); // "bab" or "aba"
