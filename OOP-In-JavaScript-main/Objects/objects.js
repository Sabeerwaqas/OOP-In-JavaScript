/*

    ***** Object: *****

    An object is a unique entity that contains properties and methods. For example "a car" is a real life
    object, which has some characteristics like color, type. etc. In object-oriented programming, the 
    characterisitcs are known as properties and the actions are called methods. Objects are everywhere
    in JavaScript, almost every element is an Object whether it is a function, array, or string. 

    Note: A Method in javascript is a property of an object whose value is a function. 

    The object can be created in two ways in JavaScript:

    Object Literal
    Object Constructor


*/

// Using object literal

let person = {
  first_name: "Sabeer",
  last_name: "Waqas",
  worksAt: function () {
    return `${this.first_name} ${this.last_name} works at Mangotech`;
  },
};

console.log(person.first_name);
console.log(person.last_name);
console.log(person.worksAt());

// Using object constructors

function person_data(first_name, sur_name, works_at) {
  this.first_name = first_name;
  this.sur_name = sur_name;
  this.worksAt = works_at;
  this.works_at = `${this.first_name} ${this.sur_name} works at ${this.worksAt}`;
}

let person_1 = new person_data("Sabeer", "Waqas", "software house");

console.log(person_1.works_at);
