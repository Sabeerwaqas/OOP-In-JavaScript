// Class in JavaScript is built by class keyword

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName = () => {
    return this.name;
  };

  getAge = () => {
    return this.age;
  };
}

// let Person1 = new Person("Sabeer", 23);
// console.log(Person1.getName());
// console.log(Person1.getAge())

// Built a new class

let workMake1 = new Person("John", 21);
let workMake2 = new Person("David", 23);

class House {
  constructor(address, price, residents) {
    this.address = address;
    this.price = price;
    this.residents = residents;
  }

  getAddress = () => {
    return this.address;
  };

  getPrice = () => {
    return this.price;
  };

  getResidents = () => {
    return this.residents;
  };

  addResident = (resident) => {
    this.residents.push(resident);
  };
}

let home = new House("Pakistan, Karachi", "10000000 pkr", [
  workMake1,
  workMake2,
]);

console.log(home.getResidents());

let Paulo = new Person("Paulo", 30);

home.addResident(Paulo);

console.log(home.getResidents());

class Professor {
  constructor(name, teaches) {
    this.name = name;
    this.teaches = teaches;
  }
}

let englishProfessor = new Professor("Prof. John", "English");

console.log(
  `The newly hired professor name is ${englishProfessor.name} and his subject is ${englishProfessor.teaches}`
);

// Defining object using traditional way

function Vehicle(name, maker, engine) {
  this.name = name;
  this.maker = maker;
  this.engine = engine;

  Vehicle.prototype.getDetails = function () {
    console.log(`I have a ${name}, made by ${maker} and launched in ${engine}`);
  };
}

let BikeOne = new Vehicle("70", "Unique", "70 CC");

console.log(BikeOne.getDetails());

// Encapsulation

class mobilePhone {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  addLaunchedYear(addLaunchedYear){
    this.addLaunchedYear = addLaunchedYear;
  }
  getDetails(){
    console.log(`Mobile name: ${this.name}, Launched Year: ${this.addLaunchedYear}`);
  }
}

let myMobile = new mobilePhone("Galaxy A12", "15K");

myMobile.addLaunchedYear("2021");

myMobile.getDetails();

// console.log(`My mobile name ${myMobile.name} and the price is ${myMobile.price}`);


// console.log(`My mobile name ${myMobile.name} and the price is ${myMobile.price}, The launched year is ${myMobile.addLaunchedYear(add)}`);


