
//perent class
class Vehicle{
    start(){
        console.log("vehicle started");
    }
    stop(){
        console.log("vechicle stop");
    }
}
//child clasa

class car extends Vehicle{
    drive(){
        console.log("car is driving");
    }
}
let c1 = new car();

c1.start();
c1.drive();
c1.stop();