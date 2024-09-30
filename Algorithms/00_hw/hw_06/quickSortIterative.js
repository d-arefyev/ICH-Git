function quickSortIterative(arr) {
  // Стек для хранения подмассивов
  const stack = [];
  stack.push(0); // Индекс начала массива
  stack.push(arr.length - 1); // Индекс конца массива

  while (stack.length > 0) {
      // Получаем индексы начала и конца подмассива
      const end = stack.pop();
      const start = stack.pop();

      if (start >= end) {
          continue;
      }
      // Выбираем опорный элемент и делим массив
      const pivotIndex = partition(arr, start, end);
      // Добавляем левую и правую части в стек для дальнейшей сортировки
      stack.push(start);    // Левая часть
      stack.push(pivotIndex - 1); // Массив до pivot
      stack.push(pivotIndex + 1); // Правая часть
      stack.push(end);    // Массив после pivot
  }
  return arr;
}
// Функция для разделения массива (возвращает индекс опорного элемента)
function partition(arr, start, end) {
  const pivot = arr[end]; // Опорный элемент
  let i = start;

  for (let j = start; j < end; j++) {
      if (arr[j] < pivot) {
          [arr[i], arr[j]] = [arr[j], arr[i]]; // Меняем местами
          i++;
      }
  }
  // Меняем местами опорный элемент с элементом на позиции i
  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
}
const arr = [5, 2, 4, 8, 1, -98, 202, 9, 7, -10, 144, 55];
const sortedArr = quickSortIterative(arr);
console.log(sortedArr);
