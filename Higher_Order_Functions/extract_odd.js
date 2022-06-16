let arr = [1,2,3]
let arr1 = [];
arr.forEach((item,index)=>{
    if(item%2!=0){
        arr1.push(item)
    }
})
console.log(arr1)