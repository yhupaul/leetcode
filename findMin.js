var findMin = function(nums) {
  let first = 0;
  let last = nums.length - 1;
  let mid;

  while(first < last)  {
    if(nums[first] < nums[last]) {
      return nums[first];
    }
    mid = Math.floor((first + last) / 2);

    if(nums[mid] >= nums[last]) {
      first = mid + 1
    } else {
      last = mid;
    }
  }
  return nums[first];
};