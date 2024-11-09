var getRow = function (rowIndex) {
  if (rowIndex < 1) return [1];

  const arr = [[1], [1, 1]];

  for (let i = 2; i <= rowIndex; i++) {
    const newArr = [1];

    for (let j = 0; j < i - 1; j++) {
      newArr.push(arr[i - 1][j] + arr[i - 1][j + 1]);
    }

    newArr.push(1);
    arr.push(newArr);
  }

  return arr[rowIndex];
};

console.log(getRow(3)); // [1,3,3,1]
