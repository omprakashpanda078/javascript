class Animal{
    constructor(name,breed){
        this.name = name;
        this.breed = breed;
    }
}
class dog extends Animal{
    constructor(name,breed){
        super(name,breed);
    }
}

let d1 = new dog("seru","labrador");
console.log(d1.name);
console.log(d1.breed);