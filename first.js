let score = prompt("Enter your score: ");

if(score >= 90 && score <= 100) {
    console.log("A grade");
}else if(score >= 70 && score <= 89) {
    console.log("B grade");
}else if(score >= 50 && score <= 69){
    console.log("C grade");
}else if(score >= 35 && score <= 49){
    console.log("D grade");
}else if(score >= 0 && score <= 34){
    console.log("fail");
}else{
    console.log("not found");
}



console.log("Your score is: " + score);