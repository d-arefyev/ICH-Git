// Модули для работы с числовыми последовательностями ---------------------------------------

// Функция для генерации последовательности Фибоначчи до указанного числа
export function generateFibonacci(limit: number): number[] {
  const fibonacci: number[] = [0, 1];
  
  while (true) {
      const nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      if (nextNumber > limit) break;
      fibonacci.push(nextNumber);
  }
  
  return fibonacci;
}

// Функция для генерации простых чисел до указанного числа
export function generatePrimeNumbers(limit: number): number[] {
  const primes: number[] = [];
  
  for (let num = 2; num <= limit; num++) {
      let isPrime = true;

      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
              isPrime = false;
              break;
          }
      }

      if (isPrime) {
          primes.push(num);
      }
  }

  return primes;
}
