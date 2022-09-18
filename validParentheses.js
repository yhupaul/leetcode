
/* 
example:
(), {}, [] -> valid
{()}, [{}], {[()]}, ({})[] -> valid
[, (, { -> invalid
{(}, {]} -> invalid

     i    
({})[]

stack [ ]

time complexity = o(n)
space complexity = o(n)
*/



// const isValid = function(s) {
//     const hashMap = { "(": ")", "{": "}", "[": "]" }
//     let stack = []

//     for(let ele of s) {
//         if(hashMap[ele]) {
//             stack.push(hashMap[ele])
//         } else if(stack.length > 0 && stack[stack.length - 1] === ele) {
//             stack.pop()
//         } else {
//             return false
//         }
//     }
//     return !(stack.length)
// }

/*
 examples
    (), {}, [] -> valid
    ([]), {[()]}, {[]}() -> valid

    (, ), {[}], ()) -> invalid 

        
    {[]}()

    stack = []

    time complexity = 0(N)
    space complexity = 0(N)
*/

const isValid = function(str) {
    const hashMap={"(": ")", "[": "]", "{": "}"}
    let stack = []

    for(let ch of s) {
        //ch is an opening bracket
        if(hashMap[ch]) {
            stack.push(hashMap[ch])
        }
        // ch is an closing bracket and it matches with the last ele of stack arr
        else if(stack.length>0 && stack[stack.length -1] === ch) {
            stack.pop()
        }
        // ch is an closing bracket and it does not match with the last ele of stack arr
        else {
            return false
        }
    }
    return stack.length === 0
}
