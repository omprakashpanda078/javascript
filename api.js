let URL = "https://jsonplaceholder.typicode.com/users";
let factbtn = document.querySelector("#btn");
let div = document.getElementById("container");


const getdata = async() =>{
    console.log("getting data....");
    let response = await fetch(URL);
    console.log("Response", response);//json format
    let data = await response.json();
    console.log(data)
    console.log(data[0])
    div.innerHTML = `<h1>${data[0].name}</h1>
     <h1>${data[1].name}</h1>`
};
factbtn.addEventListener("click", getdata);