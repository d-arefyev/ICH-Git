// Quick Sort --------------------------------------------------------

const arr = [5, 2, 4, 8, 1, -98, 202, 9, 7, -10, 144, 55];

function quickSortFn(arr) {
    // Базовый случай
    if (arr.length <= 1) {
        return arr;
    }

    // Выбираем опорный элемент
    const pivot = arr[Math.floor(arr.length / 2)];

    // Разделение на два подмассива: меньше и больше опорного элемента
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    // Рекурсивно сортируем и объединяем массивы
    return [...quickSortFn(left), pivot, ...quickSortFn(right)];
}

const result = quickSortFn(arr);
console.log(result);
