// Модули для работы с числовыми последовательностями ---------------------------------------

import { generateFibonacci, generatePrimeNumbers } from './4-sequenceUtils';

// Тестирование функции генерации последовательности Фибоначчи
const fibonacciLimit = 100; // Задаем предел для последовательности Фибоначчи
const fibonacciSequence = generateFibonacci(fibonacciLimit);
console.log(`Последовательность Фибоначчи до ${fibonacciLimit}:`, fibonacciSequence);

// Тестирование функции генерации простых чисел
const primeLimit = 50; // Задаем предел для простых чисел
const primeNumbers = generatePrimeNumbers(primeLimit);
console.log(`Простые числа до ${primeLimit}:`, primeNumbers);
