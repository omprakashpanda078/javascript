let heading = document.querySelector("h1");

let btn1 = document.querySelector("button");


 btn1.addEventListener("click", ()=>{
    if(heading.innerText === "Hello"){
    heading.innerText="welcome to java script";
}else{
    //to print hello again 

     heading.innerText = "Hello";
}
});

// heading.innerText = "welcome to javascript";