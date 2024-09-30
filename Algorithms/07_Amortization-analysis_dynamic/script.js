// const randomArr = ['hello', 'jdjdj', 'dsdvv', 3, 4, 67, 99]

// function fn(arr) {

//     return arr
//     .filter(item => typeof item === 'string')
//     .map(item => item.toUpperCase())
// }

// console.log(fn(randomArr))

// O(n2)
// const mainArr = [1, 2, 3, 5, -99, -2, -3, 0, 21]

// // O(n)
// for(let i = 0; i < mainArr.length; i++) {
//     console.log(mainArr[i]);
// }
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

// O(nlogn)
// function quickSort(arr) {
//     if(arr.length <= 1) {
//         return arr
//     }

//     const pivot = arr[Math.floor(arr.length / 2)]

//     let left = []
//     let right = []

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < pivot) {
//             left.push(arr[i])
//         } else if(arr[i] > pivot) {
//             right.push(arr[i])
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// console.log(quickSort(mainArr))

class DynamicArray {
    constructor(capacity = 10) {
        this.size = 0;
        this.capacity = capacity;
        this.array = new Array(this.capacity);
    }
    // Увеличивает размер массива
    growSize() {
        this.capacity *= 2;
        const newArray = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }

    // Добавляет элемент в конец
    append(data) {
        if (this.size === this.capacity) {
            this.growSize();
        }
        this.array[this.size] = data;
        this.size++;
    }
    // Удаляет последний элемент
    remove() {
        if (this.size > 0) {
            this.size--;
            this.array[this.size] = undefined;
        }
    }
    // Удаляет элемент по индексу
    removeAt(index) {
        if (index >= 0 && index < this.size) {
            for (let i = index; i < this.size - 1; i++) {
                this.array[i] = this.array[i + 1];
            }
            this.size--;
            this.array[this.size] = undefined;
        }
    }
    // Вставляет элемент по индексу

    insertAt(index, data) {
        if (index >= 0 && index <= this.size) {
            if (this.size === this.capacity) {
                this.growSize();
            }
            for (let i = this.size; i > index; i--) {
                this.array[i] = this.array[i - 1];
            }
            this.array[index] = data;
            this.size++;
        }
    }
    clean() {
        this.array = new Array(this.capacity);
        this.size = 0;
    }

    // Проверяет, существует ли элемент
    contains(data) {
        for (let i = 0; i < this.size; i++) {
            if (this.array[i] === data) {
                return true;
            }
        }
        return false;
    }
    // Проверяет, пуст ли массив
    isEmpty() {
        return this.size === 0;
    }
}
const dynamicArr = new DynamicArray(3);
dynamicArr.append(10);
dynamicArr.append(10);
dynamicArr.append(10);
dynamicArr.remove();


console.log(dynamicArr);
