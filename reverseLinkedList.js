var reverseList = function(head) {
  let prev = null;
  let cur = head;
  while(cur) {
      let holdNext = cur.next;
      cur.next = prev;
      prev = cur;
      cur = holdNext;
  }  
  return prev;
};