var findMin = function(nums) {
  let stan;  
  let result = [];
    for(let i=0; i < nums.length; i++) {
        if(nums[i] > nums[i+1]) {
          result.push(nums[i+1])
            
        } else {
            result.push(nums[i])
        }
        return result[0];
    }
    
};