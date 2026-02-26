function bruteReverse(arr){
    let n = arr.length;
    let newArray = []
    for(let i=n-1; i>=0; i++){
        newArray.push(arr[i])
    }
    return newArray
}

function betterReverse(arr){
    // Two Pointer Approach
    if(!arr.length){
        return undefined
    }
    let start = 0;
    let end = arr.length - 1

    while(start <= end){
        let temp = arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--
    }
    return arr
}

function bestReverse(arr){
    if(arr.length<=1)
        return undefined
    let start=0
    let end= arr.length-1
    while(start<=end){
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
    return arr
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = bestReverse(arr)
console.log(result)