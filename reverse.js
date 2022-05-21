let arr = [1,2,3,4,5];

// brute force
let arr1= [];
for(let i=arr.length-1; i>=0; i--){
    arr1.push(arr[i])
}
console.log(arr1)

//optimisation with 2 pointers without extra space
function reverseArr (arr,start, end){
    let left = start;
    let right = end;
    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++;
        right--; 
    }
    console.log(arr)
}
reverseArr(arr,0,4)