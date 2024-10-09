// Переопределение конструктора в классе `Vehicle` --------------------------------------------

class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;

  constructor(make: string, model: string, type: string) {
    super(make, model); // Вызов конструктора класса Vehicle
    this.type = type;
  }

  displayInfo() {
    console.log(`
      Make: ${this.make} 
      Model: ${this.model} 
      Type: ${this.type}
      `);
  }
}

const motorcycle = new Motorcycle("Honda", "CBR500R", "Sport");
motorcycle.displayInfo();
