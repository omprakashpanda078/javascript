let arr = [1,2,3,2,4,5,6];
let n = arr.length;
let j = 0;
for (let i=0; i<arr.length;i++){
    for(let j=0; j=i;j++){
        if(arr[i]===arr[j]){
            console.log(arr[j]);
        }
    }
}