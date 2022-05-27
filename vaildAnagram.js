const isAnagram = function(s, t) {
  s=[...s].sort().join("")
  t=[...t].sort().join("")
  if(s !== t) return false
  return true
};