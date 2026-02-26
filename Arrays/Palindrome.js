function brutePalindrome(arr) {
  debugger;
  let reversedArray = [...arr].reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== reversedArray[i]) {
      return false;
    }
  }
  return true;
}

function betterPalindrome(arr){
  if(arr.length<=1){
    return true
  }
  let start = 0
  let end = arr.length-1
  while(start<=end){
    if(arr[start] !== arr[end])
    {
      return false
    } else {
      start++
      end--
    }
  }
  return true
}

function bestPalindrome(arr){
  if(arr.length <= 1){
    return true
  } 
  let start = 0;
  let end = arr.length-1;
  let mid = Math.floor(arr.length/2)
  for(let i=start; i<mid; i++){
    if(arr[i] !== arr[end-i] ){
      return false
    }
  }
  return true
}

const arr = [1, 3, 4, 1];
const result = brutePalindrome(arr);
const result2 = betterPalindrome(arr);
const result3 = bestPalindrome(arr);
// console.log(result);
console.log(result2);
console.log(result3);
