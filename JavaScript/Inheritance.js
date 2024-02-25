// Inheritance:

class Person{
    
    constructor(name){
        this.name=name;
        console.log("Parent constructor");
    }
    eat(){
        console.log("eat");
    }
    
    sleep(){
        console.log("Sleep");
    }
}

class Engineer extends Person{

    constructor(name){
        //Super KeyWord
        super(name);
        console.log("Child Constructor");
    }
    work(){
        super.eat();
        console.log("Building and Working Something..")
    }
}

class Doctor extends Person{
    work(){
        console.log("I treat Patient");
    }
}

let objEng= new Engineer("ashik");
let objDoc= new Doctor();
let objP= new Person();