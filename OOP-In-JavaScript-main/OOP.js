//     Class in JavaScript is built by class keyword

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

console.log(home.getResidents())


let Paulo = new Person ("Paulo", 30);

home.addResident(Paulo);

console.log(home.getResidents())