/*
nums[i] + nums[j] + nums[k] === 0 
nums[j] + nums[k] === 0 - nums[i]

sum = nums[left] + nums[right]

[-3, -1, 1, 2, 5]

i = 0
left = 1
right = 4
target = 3
sum = 4


case 1: sum > target
eliminate last element
right = right - 1

case 2: sum < target
eliminate first element
left = left + 1

case 3: sum === target
Found a solution!
*/

var threeSum = function(nums) {   
    // according to BigO, to save time we will refactor the arr by order
    nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
//         to skip the same element for i
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        const target = 0 - nums[i];
        let left = i +1;
        let right = nums.length - 1;
        while(right > left) {
            const sum = nums[left] + nums[right]
            if(sum > target) {
                right--;
            } else if(sum < target) {
                left++;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                while(nums[left] === nums[left + 1]) left++;
                while(nums[right] === nums[right + 1]) right--;
                left++;
                right--;
            }
        }
        
    }
    return result;
};
