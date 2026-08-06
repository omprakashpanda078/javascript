let arr = [1,2,3,2,4,5,6];
let n = arr.length;
for (let i=0; i<arr.length;i++){
    for(let j=0; j<arr.length;j++){
        if(i==j) continue
        if(arr[i]===arr[j]){
            console.log(arr[j]);
        }
    }
}