
var search = function(nums, target) {
  let fir = 0;
  let last = nums.length -1 ;
  let mid;

  while(fir <= last) {
    mid = Math.floor((fir + last) / 2);
    if (nums[mid] === target) {
      return mid;
    } else {
      if(nums[mid] > target)
      last = mid-1;
      else
      fir = mid +1
    } 
  }
  return -1;``
}

console.log(search([-1,0,3,5,9,12], 9))