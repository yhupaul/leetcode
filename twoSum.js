// const twoSum = function(nums, target) {
//   let result = [];
//   for (let i=0; i<nums.length; i++) {
//       for (let j= i+1; j<nums.length; j++){
//           if (nums[i] + nums[j] ===  target){
//               result.push(i);
//               result.push(j);
//           }
//       }
//       }
//   return result;
//   }

// console.log(twoSum([2,7,11,15], 9));

/*
time complexity
space complexity

HashMap

nums = [2, 7, 11, 15]
target = 9

map = {}
i = 0
value = 2
correspondValue = target - value
*/


 const twoSum = function(nums, target) {
    let hashMap = {};
    for (let i=0; i<nums.length; i++){
        let value = nums[i]
        let correspondValue = target - value 
        if(hashMap[correspondValue] !== undefined) {
            //if there is corespondvalue is in the hashMap 
            return [hashMap[correspondValue], i]
        } else {
            // record hashMap = {nums[i]: i..}
            hashMap[value] = i
        }
    }
 }