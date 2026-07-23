// You have to find the last element in an array if the array does not have last element return -1.

function findLastElement(arr) {
    let n = arr.length;
    if(n == 0) return -1;
    return arr[n - 1];
}
const arr = [];
let ans = findLastElement(arr);
console.log(ans);