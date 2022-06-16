let arr = [1, 2, 3, 4, 5, 6];

let result  = 0;
arr.forEach((item,index)=>{
    if(item%3==0){
        result=result+item*item*item
    }
})
console.log(result)