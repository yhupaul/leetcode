// var search = function(nums, target) {
//   if(!nums.includes(target)) return -1;
//   else {
//       for(let i=0; i<nums.length; i++) {
//           if(nums[i] === target) return i; 
//       }
//   }
// };

var search = function(nums, target) {
  if(!nums.includes(target)) return -1;
  else {
    return nums.indexOf(target);        
  }
};
console.log(search([4,5,6,7,0,1,2], 0))