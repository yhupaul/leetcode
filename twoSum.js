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
        if(hashMap[correspondValue]) {
            //if there is corespondvalue is in the hashMap 
            return [hashMap[correspondValue], i]
        } else {
            // record hashMap = {nums[i]: i..}
            hashMap[value] = i
        }
    }
 }

/*
only one valid answer exists

example
[2,7,11,15]
target =9
output [0,1]

HashMap={}
HashMap={2:0, 7:1, 11:2, 15:3}
value = hashMap[i]

(value + covalue = target)
covalue = target - value
HashMap={2:0, 7:1, 11:2, 15:3}



[3,2,4]
HashMap={3:0, 2:1, 4:2}
target=6
output={1,2}

let hashMap={};

for (let i=0; i<nums.lenght; i++) {
   // HashMap[nums[i]] = i
   target - 3 +> 
   if (HashMap[nums[i]]) 
}

 */
// let map = new Map()     // {} 
//   for (let i = 0; i < nums.length; i++) {
//     //target - nums[i] = nums.element   target = 9 nums[i] = 2 ,nums.element = 7    0 
//     if (map.has(target-nums[i])) //
//       return [map.get(target-nums[i]) , i]
//     map.set(nums[i], i)  // map =  {2:0, 7:1, 11:2, 15:3}    i = 0  map = {2:0} i = 1
//   }

