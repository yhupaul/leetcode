//호ㅏ살표 방향을 반대로 바꾼다고 생각한다.
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