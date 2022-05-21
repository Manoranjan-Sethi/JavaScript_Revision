let arr = [-4, -2, -1, 3, 7, 9];


//brute force
let ans = [];
for(let i = 0; i<arr.length; i++){
    ans.push(arr[i]^2)
}
console.log(ans)