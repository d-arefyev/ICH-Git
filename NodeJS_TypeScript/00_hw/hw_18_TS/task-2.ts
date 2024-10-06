// task-2 ---- Nested objects and optional fields -----------------------------------------------

type Car = {
  mark: string;
  model: string;
  engine: {
    type: string;
    horsepower: number;
  };
  year?: number; // Опциональное поле
};

const myCar: Car = {
  mark: "Toyota",
  model: "Corolla",
  engine: {
    type: "V4",
    horsepower: 132
  },
  year: 2020
};

function printCarInfo(car: Car): void {
  console.log(`Mark: ${car.mark}, Model: ${car.model}`);
  console.log(`Engine: ${car.engine.type}, Horsepower: ${car.engine.horsepower}`);
  if (car.year) {
    console.log(`Year: ${car.year}`);
  }
}

printCarInfo(myCar);
