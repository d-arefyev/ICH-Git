function fibonacciIterative(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  let fib;

  for (let i = 2; i <= n; i++) {
    fib = a + b;  // текущее число Фибоначчи
    a = b;        // передвигаем указатели вперед
    b = fib;      // передвигаем указатели вперед
  }

  return fib;
}

console.log(fibonacciIterative(5));
console.log(fibonacciIterative(10));
