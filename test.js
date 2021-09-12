function findLowestPrice(products, discounts) {
  const discountObj = {};

  discounts.forEach((discount) => {
    discountObj[discount[0]] = {
      type: discount[1],
      price: discount[2],
    };
  });

  discountObj;

  let totalPrice = 0;

  products.forEach((product) => {
    console.log(product);
    let productLowestPrice = product[0];
    for (let i = 1; i < product.length; i++) {
      if (discountObj[product[i]]) {
        productLowestPrice = Math.min(
          getPrice(
            discountObj[product[i]].type,
            discountObj[product[i]].price,
            product[0]
          ),
          productLowestPrice
        );
      }
    }
    productLowestPrice;
    totalPrice += parseInt(productLowestPrice);
  });

  return totalPrice;
}

const getPrice = (discountType, rate, originalPrice) => {
  discountType;
  rate;
  originalPrice;
  switch (discountType) {
    case "0":
      return 10;
    case "1":
      rate;
      const discountRate = rate / 100;
      discountRate;
      originalPrice;
      const calculatedPrice = originalPrice - originalPrice * discountRate;
      calculatedPrice;
      return Math.floor(originalPrice - originalPrice * discountRate);
    case "2":
      return parseInt(originalPrice - rate);
  }
};

// console.log(
//   findLowestPrice(
//     [
//       ["10", "d0", "d1"],
//       ["15", "EMPTY", "EMPTY"],
//       ["20", "d1", "EMPTY"],
//     ],
//     (discounts = [
//       ["d0", "1", "27"],
//       ["d1", "2", "5"],
//     ])
//   )
// );

console.log(
  findLowestPrice(
    [
      ["10", "sale", "janurary-sale"],
      ["200", "sale", "EMPTY"],
    ],
    [
      ["sale", "0", "10"],
      ["janurary-sale", "1", "10"],
    ]
  )
);
