const longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ""; // if there is nothing the arr it return ""
    
  let prefix = strs[0]; //the first word will be the standart for comparing
  
  //it start from 1 as we need to compare with first one
  for (let i = 1; i < strs.length; i++) {  
      //it will go through the each word and delet cha untill there is same char is in the word 
      while (strs[i].indexOf(prefix) !== 0) {
          //this is the code remove the last cha
          prefix = prefix.substring(0, prefix.length - 1); 
      }
  }
  return prefix;
}