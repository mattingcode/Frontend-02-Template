const GOOD = '1';
const BAD = '-1';
class Animal {
  type = null;
  construcor() {
    this.healthy = GOOD;
  }
}
class Person extends Animal{
  constructor() {
    super();
    this.type = 'person';
  }
}
class Dog extends Animal {
  constructor() {
    super();
    this.type = 'dog';
  }
}
function bite(biteInstance, bitedInstance) {
  bitedInstance.healthy = BAD;
}
const person = new Person();
const dog = new Dog();
bite(dog, person);
console.log(dog, person);