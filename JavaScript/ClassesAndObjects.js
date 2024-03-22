const employee={
    fullname: "Employee Name is Here",
    calcTax(){
      console.log("Tax Percentage is 10%");
    }
};

const emp1={
    salary:25000, 
}

const emp2={
    salary:25000,
}

const emp3={
    salary:25000,
}

const emp4={
    salary:25000,
}


emp1.__proto__ = employee;
emp2.__proto__ = employee;
emp3.__proto__ = employee;
emp4.__proto__ = employee;

// Classes and Objects:

class Car{
    // constructor
    constructor(brand , mileage){
        console.log("object is created, and constuctor is automatically invoked");
        this.brand=brand;
        this.mileage=mileage;
        console.log(`Brand: ${brand}`)
        console.log(`Miliage ${mileage}`)
    }
    start(){
        console.log("Start..");
    }

    stop(){
        console.log("Stop..");
    }
    setBrand(brand){
        this.brand=brand;
    }
}

let fortuner = new Car("Fortuner", 12);
let lexus = new Car("Lexus",24)

