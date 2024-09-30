/*
const arr = [6,4,3,2,5,1,7,8];

function linearSearch(array, num){
    for(let i = 0; i < array.length; i++) {
        if(array[i] === num){
            return i;
        }
    }
    return -1; // не найдено
}

console.log('Искомое число на ' + linearSearch(arr, 8) + ' индексе');

// 0(1); // одно действие, где 1 - количество итераций
// 0(n) ; // линейная сложность, где n - количество итераций
*/

/*
// Код для сортировки по возрастанию:
const sortedArray = [9, 2, 3, 7, 5, 6, 4, 8, 1];

sortedArray.sort((a, b) => a - b);

console.log(sortedArray); // Вывод: [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

/*
// Код для сортировки по убыванию:
const sortedArray = [9, 2, 3, 7, 5, 6, 4, 8, 1];

sortedArray.sort((a, b) => b - a);

console.log(sortedArray); // Вывод: [9, 8, 7, 6, 5, 4, 3, 2, 1]
*/



const notSortedArray = [2,1,4,5,7,3,0,6,8,9];

function bubbleSort(array) {
    let temp;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] > array[j + 1]){
                temp = array[j]; 
                array[j] = array[j + 1];
                array[j+1] = temp;
            }
        }
    }
    console.log(JSON.stringify(array));
}
bubbleSort(notSortedArray);

// Sorted !!!
function binarySearch(array, num){
    let left = 0;
    let right = array.length - 1;
    let counter = 1;

    while(left <= right){
        const middle = Math.floor((left + right) / 2);

        if(array[middle] === num){
            console.log('Колличество иттераций = ', counter)
            return middle;
        } else if(array[middle] < num){
            left = middle + 1
        } else {
            right = middle - 1;
        }
        counter++;
    }
    console.log('Колличество иттераций = ', counter)
    return -1;
}

console.log('Искомое число на ' + binarySearch(notSortedArray, 5) + ' индексе');
