arr = [-1, 0, -1, 2, -1, 4]
target = 0;

for(let i=0 ;i<arr.length; i++){
    for(let j=i; j<arr.length-1; j++){
        for(let k=j; k<arr.length-1; k++){
            if(arr[i]+arr[j]+arr[k] == 0){
                console.log(i,j,k)
            }
        }
    }
}