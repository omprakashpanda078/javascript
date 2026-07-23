let num = [22, 33, 44, 56, 78, 99, 98];
let i = num;
function evenum(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {

            console.log(arr[i]);

        }
    }
}
evenum(i);