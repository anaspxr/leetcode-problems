/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const big =
    num1.length > num2.length
      ? num1.split("").reverse()
      : num2.split("").reverse();
  const small =
    num1.length > num2.length
      ? num2.split("").reverse()
      : num1.split("").reverse();

  let rem = 0;
  let result = "";
  let i = 0;

  for (; i < small.length; i++) {
    const sum = Number(big[i]) + Number(small[i]) + rem;
    result += sum >= 10 ? sum - 10 : sum;
    rem = sum >= 10 ? 1 : 0;
  }

  for (; i < big.length; i++) {
    const sum = Number(big[i]) + rem;
    result += sum >= 10 ? sum - 10 : sum;
    rem = sum >= 10 ? 1 : 0;
  }

  if (rem) result += rem;

  return result.split("").reverse().join("");
};

console.log(addStrings("456", "77")); // "134"
