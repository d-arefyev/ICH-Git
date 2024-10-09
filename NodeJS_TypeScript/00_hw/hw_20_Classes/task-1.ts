// Класс `Animal` и его наследник `Dog` ---------------------------------------------------------
class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  sound() {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, species: string, breed: string) {
    super(name, species); // вызов конструктора род.класса Animal
    this.breed = breed;
  }
  sound() {
    console.log("The dog barks");
  }
}

const animal = new Animal("New Animal", "Unknown");
animal.sound();

const dog = new Dog("Jack", "Shepherd", "German Shepherd");
dog.sound();
console.log(dog.name);
console.log(dog.species);
console.log(dog.breed);
