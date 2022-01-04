// Inputs
const firstArray =[2,4,6,6,3];
const secondArray = [4,3,6,2,6];
const doubleArray = [12, 4, 6, 12, 8];


function CheckArrayHasSameElements(fArr, sArr) {
  const fArrObj = {};
  const sArrObj = {};
  console.log(fArr, sArr);
  if(fArr.length !== sArr.length) return false;
  
  for(let a of fArr) {
    fArrObj[a] = fArrObj[a] ? fArrObj[a] + 1 : 1;
  }

  for(let b of sArr) {
    sArrObj[b] = sArrObj[b] ? sArrObj[b] + 1 : 1;
  }

  for(let o in fArrObj) {
    if(!sArrObj[o] || fArrObj[o] !== sArrObj[o]) {
      return false;
    }
  }

  return true;
}

function CheckArrayHasDoubleElements(fArr, sArr) {
  const fArrObj = {};
  const sArrObj = {};
  console.log(fArr, sArr);
  if(fArr.length !== sArr.length) return false;
  
  for(let a of fArr) {
    fArrObj[a] = fArrObj[a] ? fArrObj[a] + 1 : 1;
  }

  for(let b of sArr) {
    sArrObj[b] = sArrObj[b] ? sArrObj[b] + 1 : 1;
  }

  for(let o in fArrObj) {
    if(!sArrObj[o*2] || fArrObj[o] !== sArrObj[o*2]) {
      return false;
    }
  }

  return true;
}

console.log(CheckArrayHasSameElements(firstArray, secondArray));
console.log(CheckArrayHasSameElements(firstArray, doubleArray));
console.log(CheckArrayHasDoubleElements(firstArray, doubleArray));
console.log(CheckArrayHasDoubleElements(firstArray, secondArray));
