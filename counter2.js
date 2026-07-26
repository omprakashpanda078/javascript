let btn1 = document.querySelector("#plush");

let btn2 = document.querySelector("#minus");

let h1 = document.querySelector("#count");

let i = 0;

btn1.addEventListener("click", () => {
    i++;
    count.innerText = i;
});

btn2.addEventListener("click",()=> {
    i--;
    count.innerText = i;
});