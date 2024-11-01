/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let low = 0;
  let high = x / 2;
  function fun(midpoint) {
    const square = midpoint * midpoint;
    if (square === x) return midpoint;
    if (square > x) {
      high = midpoint;
      return fun((midpoint + low) / 2);
    }
    if (square < x) {
      low = midpoint;
      return fun((high + midpoint) / 2);
    }
  }

  if (x < 2) return 1;

  return Math.floor(fun(x / 2));
};

console.log(mySqrt(8)); // 2
