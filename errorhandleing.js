//Errorhandleing in js
let password = "123";
let getUserPass = document.querySelector("#input")
console.log(getUserPass)
let btn = document.querySelector("button")

btn.addEventListener("click", () => {
    let enteredPassword = getUserPass.value
    console.log(getUserPass)
    if(enteredPassword === password) 
        console.log("Login successfully")
    else 
        console.log("login Failed")
})



