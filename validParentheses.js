isValid = s => {
  let stack = [];
  for (i=0; i<s.length; i++){
    let char = stack[stack.length -1]
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if ((char === "(" && char === ")") || (char === "{" &&)
    )
  }
}