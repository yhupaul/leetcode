// var maxProfit = function(prices) {
//   let maxProfit = 0;
//   for (let buyPrice = 0; buyPrice < prices.length; buyPrice++){
//     //start ell price with buyPrice + 1 to make sure we are not going back on the days and to skip repeated calcualtions//
//     for (let sellPrice = buyPrice + 1; sellPrice < prices.length; sellPrice++){
//       let profit = prices[sellPrice] - prices[buyPrice]; 
//       maxProfit =  Math.max(maxProfit, profit);
//     }
//   }
//   return maxProfit;
// };
const maxProfit = function(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for(let sell = 1; sell < prices.length; sell++) {
    let sellPrice = prices[sell];
    let profit = sellPrice - minPrice;
    
    maxProfit = Math.max(maxProfit, profit);

    if(sellPrice < minPrice) minPrice = sellPrice;
    // minPrice will be conpare with sellPrice so it make keep minPrice in array
  }
  return maxProfit;
}

console.log(maxProfit([7,6,4,3,1]));