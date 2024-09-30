function fibonacciRecursive(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}

console.log(fibonacciRecursive(5));
console.log(fibonacciRecursive(10));


// Вызов fibonacciRecursive(5)
// fibonacciRecursive(5) вызывает:
// fibonacciRecursive(4) + fibonacciRecursive(3)
// fibonacciRecursive(4) вызывает:
// fibonacciRecursive(3) + fibonacciRecursive(2)
// fibonacciRecursive(3) вызывает:
// fibonacciRecursive(2) + fibonacciRecursive(1)
// fibonacciRecursive(2) вызывает:
// fibonacciRecursive(1) + fibonacciRecursive(0)

// Теперь рассмотрим каждый случай:
// fibonacciRecursive(1) возвращает 1
// fibonacciRecursive(0) возвращает 0

// Построим вычисление:
// fibonacciRecursive(2) = fibonacciRecursive(1) + fibonacciRecursive(0) = 1 + 0 = 1
// fibonacciRecursive(3) = fibonacciRecursive(2) + fibonacciRecursive(1) = 1 + 1 = 2
// fibonacciRecursive(4) = fibonacciRecursive(3) + fibonacciRecursive(2) = 2 + 1 = 3
// fibonacciRecursive(5) = fibonacciRecursive(4) + fibonacciRecursive(3) = 3 + 2 = 5



// Вызов fibonacciRecursive(10)
// fibonacciRecursive(10) вызывает:
// fibonacciRecursive(9) + fibonacciRecursive(8)
// fibonacciRecursive(9) вызывает:
// fibonacciRecursive(8) + fibonacciRecursive(7)
// И так далее...

// Вычисления будут продолжаться, пока не будут достигнуты базовые случаи.

// Для упрощения приведем уже готовую последовательность, которая формируется при каждом вызове:
// fibonacciRecursive(0) = 0
// fibonacciRecursive(1) = 1
// fibonacciRecursive(2) = 1
// fibonacciRecursive(3) = 2
// fibonacciRecursive(4) = 3
// fibonacciRecursive(5) = 5
// fibonacciRecursive(6) = 8
// fibonacciRecursive(7) = 13
// fibonacciRecursive(8) = 21
// fibonacciRecursive(9) = 34
// fibonacciRecursive(10) = 55
// Следовательно, fibonacciRecursive(10) возвращает 55.