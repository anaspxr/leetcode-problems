var singleNumber = function (nums) {
  const obj = {};
  nums.forEach((num) => {
    if (obj[num]) {
      delete obj[num];
    } else obj[num] = 1;
  });
  console.log(obj);

  return Object.keys(obj)[0];
};

console.log(
  singleNumber([
    2,
    2,
    1,
    1,
    91014,
    141,
    4,
    14,
    ,
    14,
    1,
    ,
    41,
    4,
    1,
    234,
    ,
    3,
    5,
    35,
    3,
  ])
); // 1
