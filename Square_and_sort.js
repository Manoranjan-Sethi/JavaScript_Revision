let arr = [-4, -2, -1, 3, 7, 9];


//brute force
let ans = [];
for(let i = 0; i<arr.length; i++){
    ans.push(arr[i]*arr[i])
}
// console.log(ans)
ans = ans.sort((a,b)=>(a-b));
console.log(ans)

//2 pointers optimisation
let result = new Array(arr.length).fill(0);
let i = 0;
let j = arr.length-1;
let res = arr.length-1;
while(i<=j){
    let left = arr[i]*arr[i];
    let right = arr[j]*arr[j];
    if(left < right){
        result[res]=right;
        j--;
    }else{
        result[res]= left;
        i++;
    }
    res--;
}
console.log(result)