let marks = [85,97,44,37,58,60];

let sum = 0;

for(let i = 0; i<marks.length; i++){
    console.log(marks[i]); 
    sum = sum + marks[i];
}
let avg = sum / marks.length;
console.log("the avg of the total no. is ", avg)
