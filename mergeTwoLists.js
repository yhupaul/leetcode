
//This is one way to sort two array *not for leetcode as it's required  to use listnode function 
// const mergeTwoLists = function(list1, list2) {
//   let result = [];
    
//     while (list1.length && list2.length) {
//         const next = (list1[0] < list2[0]) ? list1.shift() : list2.shift();
//         result.push(next);
//     }
    
//     if(list1.length) {
//         result = result.concat(list1);
//     } else if(list2.length) {
//         result = result.concat(list2);
//     }
    
//     return result;
// };

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? 0 : next)
}

var mergeTwoLists =function(list1, list2) {
    const dummy = new ListNode(); 
    let prev = dummy;

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            prev.next = list1;
            prev = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            prev = list2;
            list2 = list2.next
        }

    }
    if(!list1) prev.next = list2;
    if(!list2) prev.next = list1;

    return dummy.next;
}