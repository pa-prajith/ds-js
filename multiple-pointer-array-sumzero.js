const inp_1 = [-3, -2, -1, 0, 1, 2, 3];
const inp_2 = [-2, 0, 1, 3];
const inp_3 = [1, 2, 3];
const inp_4 = [-3, -2, 0, 2, 4, 5];


function sumZero(arr) {
  if(arr.length < 2) return undefined;

  let startIndex = 0;
  let endIndex = arr.length -1;
  while(startIndex < endIndex) {
    const res = arr[startIndex] + arr[endIndex];
    if(res === 0) {
      return [arr[startIndex], arr[endIndex]];
    } else if(res  < 0) {
      startIndex ++;
    } else {
      endIndex --;
    }
  }
  return undefined;
}

console.log(sumZero(inp_1));
console.log(sumZero(inp_2));
console.log(sumZero(inp_3));
console.log(sumZero(inp_4));
