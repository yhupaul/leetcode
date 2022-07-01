var topKFrequent = function(nums, k) {
  //check reduce() and Map() below code is used for make it looks like this {ele: 1, ele: 1}
  let returnedObj = nums.reduce((ele, freNum) => {
      if(!ele[freNum]) {
          ele[freNum] = 1;
          return ele;
      }
      ele[freNum] += 1;
      return ele;
  }, {});
  
  //Object.entries make object to arry form like [[ele, freNum], [] ]
  let sorted = Object.entries(returnedObj).sort((a, b) => b[1] - a[1]);
  let finalArr = [];
  let i = 0;
  do {
      finalArr.push(sorted[i][0]);
      i++
  } while (i < k);
  return finalArr;
};