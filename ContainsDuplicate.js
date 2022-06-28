// var containsDuplicate = function(nums) {
//   if (nums.length < 1) {
//     return false;
//   }
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i+1; j < nums.length; j++){
//       if(nums[i] === nums[j]){
//         return true;
//       } 
//     }
//   }return false;
// };

// use Set();

var containsDuplicate = function(nums) {
  let myNums = new Set(nums);
  if(myNums.size !== nums.length) return true;
  else return false;
};