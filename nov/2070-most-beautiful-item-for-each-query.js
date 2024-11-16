var maximumBeauty = function (items, queries) {
  const priceMap = {};
  const res = [];
  let highestBeauty = 0;

  items.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] === b[0]) return a[1] - b[1];
    return 1;
  });

  for (const i of items) {
    const price = i[0];
    const beauty = i[1];
    console.log(i);

    if (!(beauty > highestBeauty)) continue;
    console.log("here");

    highestBeauty = beauty;

    if (priceMap[price] && priceMap[price] < beauty) {
      priceMap[price] = beauty;
    } else {
      priceMap[price] = beauty;
    }
  }

  console.log(priceMap);

  const keys = Object.keys(priceMap)
    .map((key) => Number(key))
    .sort((a, b) => a - b);

  for (q of queries) {
    if (!priceMap[q]) {
      let beauty = 0;
      for (price of keys) {
        if (price > q) break;
        if (priceMap[price] > beauty) beauty = priceMap[price];
      }
      res.push(beauty);
    } else {
      res.push(priceMap[q]);
    }
  }

  return res;
};

console.log(
  maximumBeauty(
    [
      [1, 2],
      [3, 2],
      [2, 4],
      [5, 6],
      [3, 5],
    ],
    [1, 2, 3, 4, 5, 6]
  )
);
