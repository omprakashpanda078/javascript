

// Largest Element in an array
let arr = [1, 2, 3, 6, 24, 8, 7, 98];
let largest = arr[0];
for(let i = 1; i < arr.length; i++) {
    if(arr[i] > largest) largest=arr[i];
}
console.log(largest);