let companyName = ["bloomberg","microsoft","uber","google","IBM","netflix"];

//remove first company from array

//companyName.shift(0)

//to add ola in uber place
//companyName.splice(2,1,"ola");

//add amazone at the end

// companyName.push("Amazone")


// console.log(companyName)

// Largest Element in an array
let arr = [1, 2, 3, 6, 24, 8, 7, 98];
let largest = arr[0];
for(let i = 1; i < arr.length; i++) {
    if(arr[i] > largest) largest=arr[i];
}
console.log(largest);