var isPalindrome = function(s) {
  let lowerS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let i = 0;
  let j = lowerS.length-1;
  
  while(i <= j) {
  if(lowerS[i] === lowerS[j]) {
      i++;
      j--;
  } else {
      return false;
  }
  }return true;
};