// Buble Sort --------------------------------------------------
// не рекомендуется применять к большим данным, потому что размножает массив данных

// const arr = [1, 2, 3, 5, -7, -9, -99, 100, 44]

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length - 1 - i; j++) {
//         if(arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }

// console.log(arr);



// Merge and sort --------------------------------------------------

// const arr = [1, 2, 3, 5, -7, -9, -99, 100, 44]

// //Сортировка
// function sortFn(arr) {

//     if (arr.length <= 1) {
//         return arr;
//     }

//     const middle = Math.floor(arr.length / 2);
//     const left = sortFn(arr.slice(0, middle));
//     const right = sortFn(arr.slice(middle));

//     return mergeFn(left, right);
// }
// //объединение
// function mergeFn(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return result.concat(left.slice(leftIndex), right.slice(rightIndex));
// }

// console.log(sortFn(arr));
// console.log(arr);



// Метод concat --------------------------------------------------

// const arr2 = [1, 2, 3];
// const arr3 = [1, 2, 3];

// const res = arr2.concat(arr3);
// console.log(res);



// Quick Sort --------------------------------------------------

const arr = [1, 2, 3, 5, -7, -9, -99, 100, 44];

function quickSortFn(arr) {

    //Базовый случай
    if (arr.length <= 1) {
        return arr;
    }

    //Находим пивот (опорная точка)
    const pivot = arr[Math.floor(arr.length / 2)];

    //два масива которые меньше и больше пивота
    let left = [];
    let right = [];

    //проходим по каждому элементу массива и распределяем в соответсвующий массив
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); //элемент меньше опорного - в левый массив
        } else if (arr[i] > pivot) {
            right.push(arr[i]); //элемент больше опорного - в правый массив
        }
    }
    //результат отработки логики лишь один раз без рекурсивного вызова
    // console.log([...left, pivot, ...right])

    //рекурсивно сортируем левую и правую части массива  а затем объединяем их в массив
    //Массив будет [отсортированные меньшие элементы] + [опорный (pivot )] + [отсортированые больше элементы]
    return [...quickSortFn(left), pivot, ...quickSortFn(right)];

}

quickSortFn(arr);
const result = quickSortFn(arr);

console.log(result);
