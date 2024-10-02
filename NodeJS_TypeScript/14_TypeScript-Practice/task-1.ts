// Task 1 ------ Создание типизированного объекта -----------------------------------------------

// let car: {
//   brand: string;
//   model: string;
//   year: number;
//   isElectric: boolean;
// } = {
//   brand: "BMW",
//   model: "E39",
//   year: 2003,
//   isElectric: false,
// };

// function describeCar(car: {
//   brand: string;
//   model: string;
//   year: number;
//   isElectric: boolean;
// }): string {
//   let status = car.isElectric ? "Yes" : "No";
//   return `${car.brand} ${car.model} (${car.year}), Electric: ${status}`;
// }

// console.log(describeCar(car));


// Refactoring с помощью interface и деструктуризации -------------------------------------------

// export interface Car { // можно вынести interface и импотрировать тут
//   brand: string;
//   model: string;
//   year: number;
//   isElectric: boolean;
// }

// let car: Car = {
//   brand: "BMW",
//   model: "E39",
//   year: 2003,
//   isElectric: false,
// };

// function describeCar({ brand, model, year, isElectric }: Car): string {
//   let status = isElectric ? "Yes" : "No";
//   return `${brand} ${model} (${year}), Electric: ${status}`;
// }

// console.log(describeCar(car));


// Добавление конструктора ---------------------------------------------------------------------

export interface Car {
  brand: string;
  model: string;
  year: number;
  isElectric: boolean;
}

function CarConstructor(
  brand: string,
  model: string,
  year: number,
  isElectric: boolean
): Car {
  return { brand, model, year, isElectric };
}

let car: Car = CarConstructor("BMW", "E39", 2003, false);
let car2: Car = CarConstructor("Tesla", "Type S", 2024, true);

function describeCar({ brand, model, year, isElectric }: Car): string {
  let status = isElectric ? "Yes" : "No";
  return `${brand} ${model} (${year}), Electric: ${status}`;
}

console.log(describeCar(car));
console.log(describeCar(car2));
