function mergeSort(arr) {
  // Базовый случай: если длина массива меньше или равна 1, возвращаем его
  if (arr.length <= 1) {
      return arr;
  }

  // Разделение массива на две половины
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Рекурсивная сортировка каждой половины
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Слияние отсортированных половин
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Пока не достигнут конец одного из массивов
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
      } else {
          result.push(right[rightIndex]);
          rightIndex++;
      }
  }

  // Добавляем оставшиеся элементы
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr));
