var discountPrices = function (sentence, discount) {
  const splitted = sentence.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    const word = splitted[i];

    if (word.startsWith("$")) {
      let flag = true;

      for (let j = 1; j < word.length; j++) {
        const charCode = word.charCodeAt(j);
        if (!(charCode > 47) || !(charCode < 58)) {
          flag = false;
          break;
        }
      }
      if (flag) {
        const currentPrice = Number(word.slice(1));
        if (!currentPrice) continue;
        const discountPrice = currentPrice - (currentPrice * discount) / 100;
        splitted[i] = "$" + discountPrice.toFixed(2);
      }
    }
  }
  return splitted.join(" ");
};

console.log(discountPrices("The price of the item is $100", 20)); // "The price of the item is $80"
