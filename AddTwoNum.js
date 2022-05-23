var addTwoNumbers = function(l1, l2) {
  let result;
  let firNum = l1.reverse().join(''); 
  // console.log(firNum)
  let secNum = l2.reverse().join(''); 
  // console.log(secNum)
   
  let total = Number(firNum) + Number(secNum); 
  // console.log(total)
  result = total.toString().split('').reverse().map(Number);
  console.log(result)
};

// l1 = [2,4,3]
// l2 = [5,6,4]

addTwoNumbers([2,4,3], [5,6,4]);
addTwoNumbers([0], [0]);
addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]);

