// Input array

const input = [4,3,2,7,8,2,3,1];

// Expected Output = [2,3];


function ReturnDuplicates_1(arr) {
  const result = [];
  const hash ={};

  for(let ele of arr) {
    if(hash[ele]) {
      result.push(ele);
    } else {
      hash[ele] = 1;
    }
  }
  console.log('Result of Approach -1', result);
}

function ReturnDuplicates_2(arr) {
  const result = [];
  let val;
  for(let ele of arr) {
    val = Math.abs(ele);
    if(arr[val-1] < 0) {
      result.push(val);
    } else {
      arr[val-1] = arr[val-1] * -1;
    }
  }
  console.log('Result of Approach - 2', result);
}

ReturnDuplicates_1(input);
ReturnDuplicates_2(input);
