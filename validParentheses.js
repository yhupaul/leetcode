// isValid = s => {
//   // Create a stack
//   let stack = [];
//   // Loop through each element in the string
//   for (i=0; i<s.length; i++){
//     let char = stack[stack.length -1]
//     // If you encounter a starting bracket, push it onto the stack
//     if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
//       stack.push(s[i]);
//       // Pop the opening bracket off the stack,
//       // if there is a corresponding closing bracket in the string
//     } else if (
//       (char === "(" && s[i] === ")") || 
//       (char === "{" && s[i] === "}") ||
//       (char === "[" && s[i] === "]") 
//     ) {
//       stack.pop();
//     } else return false;
//   }
//   // Check empty stack
//   return stack.length ? false : true;
// }

// // finally I am able to understand it

var isValid = function(s) {
  const hashMap = { "(":")", "{":"}", "[":"]" };
  const stack = [];
  for(let ch of s) {
      if(hashMap[ch]) {
          stack.push(hashMap[ch]);
      } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
          stack.pop();
      } else {
          return false;
      }
  }
  return !stack.length;
};