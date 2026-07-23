let divs = document.querySelectorAll("Box");

let idx = 0;
for (div of divs){

    console.log(div.innerHTML);

    // div.innerText = `new unique value ${idx}`
    // idx++;
}
console.log(divs[0].innerText);