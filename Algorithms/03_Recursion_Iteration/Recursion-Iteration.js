// Рекурсивная версия функции

function func_recursive(x, y) {
  if (x === 0) {
    return y;
  } else {
    const res = func_recursive(x - 1, x + y);
    console.log(`res=${res}; x=${x}; y=${y}`);
    return res;
  }
}

/*
func_recursive(3, 4)    - res = 10, x = 3, y = 4
func_recursive(2, 7)    - res = 10, x = 2, y = 7
func_recursive(1, 9)    - res = 10, x = 1, y = 9
func_recursive(0, 10)   - 

*/

// Итеративная версия функции

function func_iterative(x, y) {
  while (x !== 0) {
    y = x + y;  // Обновляем значение y, добавляя x
    x = x - 1;  // Уменьшаем x на 1
    
    // Выводим текущие значения переменных для наглядности, как в рекурсивной версии
    console.log(`res=${y}; x=${x}; y=${y}`);
  }
  
  // Возвращаем накопленный результат
  return y;
}





// function recurse(n) {
//     if(n === 1) return 1
//     return power(n, 2) * recurse(n-1)
// }

// function power(n, b) {
//     if(b === 1) return n
//     return n * power(n, b-1)
// }

// console.log(recurse(6))


// 1^5 * 2^5 * 3^5  * 4^5  * 5^5  * 6^5 

// 1. 4 * 4 * 4 * 4 * 4
// 2. 4 * 4 * 4 * 4
// 3. 4 * 4 * 4
// 4. 4 * 4 * 4
// 5. 4 * 4






// function recurse(n) {
//   if(n === 1) return 1
//   return n * recurse(n-1)
// }


// function iteration(n) {
//     let res = 0
//     for (let i = 0; i <= n; i++) {
//         res = res + i        
//     }
//     return res
// }

// console.log(recurse(5))

// 1. recurse(5)          
// 2. 5 + recurse(4)
// 3. 4 + recurse(3)
// 4. 3 + recurse(2)
// 5. 2 + recurse(1)

// 1. recurse(5)          
// 2. 5 + 4 + 3 + 2 + 1
// 3. 4 + 3 + 2 + 1
// 4. 3 + 2 + 1
// 5. 2 + 1
