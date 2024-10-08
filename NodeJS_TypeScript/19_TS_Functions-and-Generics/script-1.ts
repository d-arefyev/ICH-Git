// Создание функции ---------------------------------------------------------------------------

// 1. Создайте функцию, которая принимает два числа и возвращает их сумму.
const sum = (a: number, b: number): number => a + b;
console.log(sum(2, 2));

// 2. Реализуйте функцию с опциональным параметром, которая принимает строку и возвращает ее
//    длину или сообщение о пустой строке.
function getInfo(str: string, defaultStr?: string): string {
  if (defaultStr && str.length === 0) {
    return defaultStr;
  }
  return `String length = ${str.length}`;
}
console.log(getInfo("Hello"));

// 3. Напишите стрелочную функцию, которая принимает массив чисел и возвращает массив, где все
//    элементы умножены на 2.
const doubleArrayValue = (array: number[]): number[] =>
  array.map((num: number) => num * 2);
console.log(doubleArrayValue([2, 5, 9, 5]));


//           Параметры             Тип возвращаемого значения
let fooType: (a: number, b: number) => number;
fooType = (num1: number, num2: number) => num1 + num2;
console.log(fooType(5,5));
