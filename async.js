function getData(dataid){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success");
        },2000);
    });
}
//Async-await
async function getAllData(){
    console.log("getting data1 ....");
    await getData(1);
    console.log("getting data2 ....");
    await getData(2);
    console.log("getting data3 ....");
    await getData(3);
}
getAllData();