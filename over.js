let box = document.querySelector(".changes");

box.addEventListener("mouseover",(e)=>{

    box.classList.add("mode");
});
box.addEventListener("mouseout",(e)=>{

    box.classList.remove("mode");
});