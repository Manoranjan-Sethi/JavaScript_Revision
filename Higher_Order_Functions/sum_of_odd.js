let arr = [1,2,3]

let result = 0;
arr.forEach((item,index)=>{
    if(item%2!=0){
        result = result+item;
    }
})
console.log(result)