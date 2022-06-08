var romanToInt = function(s) {
  const rom = {
      'I':1,
      'V':5,
      'X':10,
      'L':50,
      'C':100,
      'D':500,
      'M':1000
  }
  
  let result = 0;
  
  for (let i=0; i<s.length; i++) {
      let now = rom[s[i]]; 
      //first number
      let next = rom[s[i+1]]; 
      //sceon number    
      
      if(now < next) {            
          //to compare each other to notice 4 to IV 
          result += next - now
          i++                     
          //two digits were caluratied at one time so go to next digit
      } else {
          result += now
      }
  }
  return result;
};