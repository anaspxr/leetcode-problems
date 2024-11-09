var maxProfit = function (prices) {
  let buy = prices[0];
  let currentMax = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
      continue;
    }
    if (prices[i] - buy > currentMax) currentMax = prices[i] - buy;
  }
  return currentMax;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
