var twoSum = function(numbers, target) {
  let i = 0;
  let j = numbers.length-1;
  
  while (i<j) {
    let sum = numbers[i] + numbers[j];
      
      if(sum === target) {
          return [i+1, j+1]
      }
       else if(sum < target) {
          i++;
      } else {
          j--;
      } 

  }

};
console.log(twoSum([2,7,11,15], 9))