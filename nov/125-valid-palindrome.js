function checkAlphaNumeric(char) {
  code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && !(code > 96 && code < 123)) {
    return false;
  }
  return true;
}

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    if (checkAlphaNumeric(s[i])) rev += s[i];
  }
  console.log(rev);

  return rev === rev.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
