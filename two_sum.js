arr = [-1,2, 4,7, 8];
target = 11

// Brute force
for(let i=0; i<arr.length-1; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]+arr[j] == target){
            console.log(i,j)
        }
    }
}


// optimisation
let i = 0; 
let j = arr.length-1;


while(i<=j) {
    if(arr[i]+arr[j] == target){
        break;
    }else if(arr[i]+ arr[j] > target){
        j--;
    }else{
        i++;
    }
}
console.log(i,j)