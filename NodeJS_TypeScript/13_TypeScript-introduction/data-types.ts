// Типы переменных / Variable types
let a;
var a1; // hoisting
const t = "t";

// Типы данных примитивы
// 1. number
// 2. string
// 3. boolean
// 4. bigint
// 5. undefined
// 6. null
// 7. symbol

// 8. object

// Определение переменных / Defining variables
let firstName: string = "John";
firstName = "Jack";
let age: number = 20;
let isAlive: boolean = true;
let lastName = "Smith";

// Переменная any / Variable any
let temp: any = "temporary value"; // не одного :any (определяет любой тип дпнных)
temp = 20;
temp = true;
temp = null;

// Массивы / Arrays
let array: number[] = [42, 55, 0, -150, 55];
let arrayStr: string[];
let arrayBool: boolean[];
arrayStr = ["123", "123", "strng"];
console.log(typeof { key: "value" }); // object
let arrayObj: object[] = [{ key1: "value 1" }, { key2: "value2" }];
let chaosArray: any[] = ["Hello world", 42, true];
let chaosArray2: (string | number | boolean)[] = ["Hello world", 42, true];

// Arrays Cortage
let arrayCort: [number, string, number] = [1, "string", 43]; // фиксированный размер - известный набор данных

// Объекты / Objects
let unit: {
  name: string;
  age: number;
  isAlive: boolean;
};

unit = {
  name: "",
  age: 0,
  isAlive: true,
};
unit = {
  name: "Jack",
  age: 22,
  isAlive: true,
};
unit.isAlive = true;

// Interface
interface Unit {
  name: string;
  age: number;
  isAlive: boolean;
  sayHi: (name: string, age: number) => undefined;
}
let unit1: Unit;
let unit2: Unit;
// unit1.sayHi = function () {};

// Function
function functionName(props: Unit): Unit {
  return props;
}
