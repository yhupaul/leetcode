var isPalindrome = function(x) {
  let str = x.toString(); // make to string
  let len =str.length;
  for (let i=0; i<len/2; i++ ) { //it start from first to half
    if (str[i] !== str[len - 1 -i]) { // it compare with last one to half len-1-I is so important 
      return false;
    }
  }
  return true;
};