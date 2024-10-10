// Абстрактный класс Animal -------------------------------------------------------------

// 1. Создайте абстрактный класс `Animal` с абстрактным методом `makeSound()`.
abstract class Animal {
  abstract makeSound(): string;
}

// 2. Затем создайте классы `Dog` и `Cat`, которые наследуют `Animal` и реализуют метод 
//    `makeSound()` по-своему (`Dog` должен возвращать "Bark", а `Cat` — "Meow").
class Dog extends Animal {
  makeSound(): string {
    return "The dog is barking";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "The cat meows";
  }
}

// 3. Создайте массив типа `Animal[]`, включающий объекты `Dog` и `Cat`, и вызовите метод 
//    `makeSound()` для каждого элемента массива.
const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach((animal) => {
  console.log(animal.makeSound());
});
