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

//the other way to solve
var searchMatrix = function(matrix, target) {
  let fir = 0;
  let last = matrix.length*matrix[0].length - 1;
  
  while(fir <= last) {
      let mid = fir + Math.floor((last - fir) / 2);
      col = Math.floor(mid % matrix[0].length);
      row = Math.floor(mid / matrix[0].length);
      
      if (matrix[row][col] === target)
          return true;
      else if (matrix[row][col] < target)
          fir = mid + 1;
      else
          last = mid - 1;
  }
  return false;
}
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))