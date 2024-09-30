import fs from 'fs';

// Функция для чтения файла и возвращения массива чисел
function readSortedFile(filename) {
    const content = fs.readFileSync(filename, 'utf-8');
    return content.split('\n').map(Number).filter(Boolean);
}

// Функция для слияния нескольких отсортированных массивов
function mergeSortedArrays(arrays) {
    if (arrays.length === 0) return [];
    if (arrays.length === 1) return arrays[0];

    let mergedArray = arrays[0];

    for (let i = 1; i < arrays.length; i++) {
        mergedArray = merge(mergedArray, arrays[i]);
    }

    return mergedArray;
}

// Функция для слияния двух отсортированных массивов
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Основная программа для объединения файлов
function mergeFiles(filenames, outputFilename) {
    const arrays = filenames.map(readSortedFile);
    const mergedArray = mergeSortedArrays(arrays);

    // Записываем объединенный массив в новый файл
    fs.writeFileSync(outputFilename, mergedArray.join('\n'), 'utf-8');
    console.log(`Массив записан в файл: ${outputFilename}`);
}

// Пример использования
const inputFiles = ['sorted1.txt', 'sorted2.txt', 'sorted3.txt'];
const outputFile = 'merged_output.txt';

mergeFiles(inputFiles, outputFile);
