let Data = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data =", Data);
    }
}

let student1 = new User("omprakashpanda", "om@email.com");
let student2 = new User("vivek", "vivek@email.com");
let teacher = new User("teacher", "teacher@email.com");

student1.viewData();
student2.viewData();
teacher.viewData();