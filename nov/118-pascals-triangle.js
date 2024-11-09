var generate = function (numRows) {
  if (numRows < 2) return [[1]];

  const arr = [[1], [1, 1]];

  for (let i = 1; i < numRows - 1; i++) {
    const newArr = [1];

    for (let j = 0; j < i; j++) {
      newArr.push(arr[i][j] + arr[i][j + 1]);
    }

    newArr.push(1);
    arr.push(newArr);
  }

  return arr;
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
