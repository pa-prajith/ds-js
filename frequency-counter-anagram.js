

function checkAnagramStrings(aString, bString) {
  if(aString.length !== bString.length) return false;

  const aObj = {};
  const bObj = {};

  for(let a of aString) {
    aObj[a] = aObj[a] ? aObj[a] + 1 : 1;
  }

  for(let b of bString) {
    bObj[b] = bObj[b] ? bObj[b] + 1 : 1;
  }
console.log(aString, bString);
console.log(aObj, bObj);

  for(let o in aObj) {
    if(!bObj[o] || bObj[o] !== aObj[o])  {
      return false;
    }
  }

  return true;
}

console.log(checkAnagramStrings('rat' , 'tar'));
console.log(checkAnagramStrings('rat' , 'tat'));
console.log(checkAnagramStrings('rat' , 'rr'));
