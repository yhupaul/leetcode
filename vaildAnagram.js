// const isAnagram = function(s, t) {
//   s=[...s].sort().join("")
//   t=[...t].sort().join("")
//   if(s !== t) return false
//   return true
// };

// s = caat -> {a:2, c:1, t:1}
// t = taca -> {a:2, c:1, t:1}

// sCount[ch] === tCount[ch]
// sCount[ch] - tCount[ch] === 0 anagram


var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sCount = {};
  const tCount = {};
  const N = s.length;
  for (let i = 0; i < N; i++) {
    if (!sCount[s[i]]) sCount[s[i]] = 0;
    if (!tCount[t[i]]) tCount[t[i]] = 0;
    sCount[s[i]]++;
    tCount[t[i]]++;
  }
  for (let ch in sCount) {
    if (sCount[ch] !== tCount[ch]) return false;
  }
  return true;
};