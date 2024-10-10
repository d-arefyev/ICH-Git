// Создание абстрактного класса `Vehicle` -------------------------------------------------------

abstract class Vehicle {
  width: number;
  height: number;
  size: number;
  price: number;

  constructor(width: number, height: number, size: number, price: number) {
    this.width = width;
    this.height = height;
    this.size = size;
    this.price = price;
  }

  abstract move(): void;
  abstract signal(): void;
}

class Car extends Vehicle {
  isAuto: boolean;

  constructor(
    width: number,
    height: number,
    size: number,
    price: number,
    isAuto: boolean
  ) {
    super(width, height, size, price);
    this.isAuto = isAuto;
  }

  move(): void {
    console.log("Машина едет вперед");
  }
  signal(): void {
    console.log("Машина дает сигнал");
  }
  moveBack() {
    console.log("Машина едет задом на перед");
  }
}

class Boat extends Vehicle {
  constructor(width: number, height: number, size: number, price: number) {
    super(width, height, size, price);
  }
  move() {
    console.log("Лодка плывет");
  }
  signal() {
    console.log("Лодка дает сигнал");
  }
}
class Plain extends Vehicle {
  constructor(width: number, height: number, size: number, price: number) {
    super(width, height, size, price);
  }
  move() {
    console.log("Самолет летит");
  }
  signal() {
    console.log("Самолет не дает сигнал");
  }
}
class Moto extends Vehicle {
  constructor(width: number, height: number, size: number, price: number) {
    super(width, height, size, price);
  }
  move() {
    console.log("Мотоцикл едет");
  }
  signal() {
    console.log("Мотоцикл дает сигнал");
  }
}

// Пример использования:
const car = new Car(2000, 1500, 3000, 15000, true);
car.move();
car.signal();
car.moveBack();

const boat = new Boat(5000, 2000, 10000, 50000);
boat.move();
boat.signal();

const plain = new Plain(15000, 5000, 20000, 1000000);
plain.move();
plain.signal();

const moto = new Moto(500, 800, 1000, 5000);
moto.move();
moto.signal();
