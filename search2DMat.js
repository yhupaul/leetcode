var searchMatrix = function(matrix, target) {
  let newArr = [].concat(...matrix);
  let fir = 0;
  let last = newArr.length - 1;
  let mid;

  while(fir <= last) {
    mid = Math.floor((fir + last) / 2);
    if (newArr[mid] === target) {
      return true;
    } else {
      if(newArr[mid] > target)
      last = mid-1;
      else
      fir = mid +1
    } 
  }
  return false;``
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))