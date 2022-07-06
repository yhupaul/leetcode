var maxArea = function(height) {
  let result = 0;
  let left = 0;
  let right = height.length-1;
  
  while(left < right) {
      let long = right - left;
      let sum = long*Math.min(height[right], height[left]);
      result = Math.max(result, sum);
      
      if(height[left] < height[right]) {
          left++;
      } else {
          right--;
      }
  }
  return result;
};