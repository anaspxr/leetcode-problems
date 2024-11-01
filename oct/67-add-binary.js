var addBinary = function (a, b) {
  const r1 = a.split("").reverse();
  const r2 = b.split("").reverse();
  const max = Math.max(a.length, b.length);
  const sum = [];

  let carry = 0;
  let i = 0;

  function findSumAndCarry(x = 0, y = 0) {
    const sum = carry + Number(x) + Number(y);
    switch (sum) {
      case 3:
        carry = 1;
        return 1;
      case 2:
        carry = 1;
        return 0;
      default:
        carry = 0;
        return sum;
    }
  }

  while (true) {
    if (i >= max) {
      if (carry) sum[i] = carry;
      return sum.reverse().join("");
    }
    sum[i] = findSumAndCarry(r1[i], r2[i]);
    i++;
  }
};

console.log(addBinary("1010", "1011")); // 100
