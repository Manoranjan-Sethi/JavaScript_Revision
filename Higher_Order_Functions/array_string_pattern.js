let arr = ["assignment", "problem", "media", "upload"];

let arr1 =[]
arr.forEach(function(ele,i){
  if(ele[0]=="a" || ele[ele.length-1]=="a"){
    arr1.push(ele)
  }
});
console.log(arr1)