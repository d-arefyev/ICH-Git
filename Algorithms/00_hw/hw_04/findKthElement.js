function findKthElement(arr1, arr2, k) {
  let i = 0, j = 0; // Указатели для arr1 и arr2 соответственно
  let count = 0;    // Счетчик для позиции в объединенном массиве

  // Пока оба указателя не вышли за границы массивов
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          count++;
          if (count === k) {
              return arr1[i];
          }
          i++;
      } else {
          count++;
          if (count === k) {
              return arr2[j];
          }
          j++;
      }
  }

  // Если все элементы arr1 были использованы, продолжаем с arr2
  while (j < arr2.length) {
      count++;
      if (count === k) {
          return arr2[j];
      }
      j++;
  }

  // Если все элементы arr2 были использованы, продолжаем с arr1
  while (i < arr1.length) {
      count++;
      if (count === k) {
          return arr1[i];
      }
      i++;
  }

  // Если мы дошли сюда, значит что-то пошло не так (k больше, чем сумма длин массивов)
  return -1; // Ошибка
}

const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

console.log(findKthElement(arr1, arr2, k));
