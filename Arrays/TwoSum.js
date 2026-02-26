const arr = [2, 5, 5, 11];
target = 10;

function twoSum_twoLoops(arr, target) {
  let start = 0;
  let end = arr.length;
  for (let i = start; i < end - 1; i++) {
    for (let j = i + 1; j < end; j++) {
      if (target === arr[i] + arr[j]) {
        return [i, j];
      }
    }
  }
  return null;
}

function twoSum_Map(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let expected = target - arr[i];
    if (map.has(expected)) {
      return [map.get(expected), i];
    } else {
      map.set(arr[i], i);
    }
  }
  return null;
}

const result = twoSum_twoLoops(arr, target);
console.log(result);

const result2 = twoSum_Map(arr, target);
console.log(result2);
