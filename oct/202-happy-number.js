var isHappy = function (n) {
  const obj = {};
  let flag = false;
  function fun(num) {
    console.log("n", num);
    console.log("o", obj);
    if (obj[num]) return;
    obj[num] = true;
    const sum = num
      .toString()
      .split("")
      .reduce((acc, x) => acc + Number(x) * Number(x), 0);
    console.log(sum);
    if (sum === 1) {
      flag = true;
    }
    fun(sum);
  }
  fun(n);
  return flag;
};

console.log(isHappy(19));
