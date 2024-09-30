// const arr = [1, 2, 56, 8, -2, 3, 9, -99, 22, -2, 0];

// // Замена первого и последнего элементов
// [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

// console.log(arr);



// const arr = [1, 2, 56, 8, -2, 3, 9, -99, 22, -2, 0];

// function quickSortFn(arr) {
// 	if (arr.length <= 1) {
// 		return arr;
// 	}

// 	const pivot = arr[Math.floor(arr.length / 2)];

// 	let left = [];
// 	let right = [];
// 	let middle = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] < pivot) {
// 			left.push(arr[i]);
// 		} else if (arr[i] > pivot) {
// 			right.push(arr[i]);
// 		} else {
// 			middle.push(arr[i]);
// 		}
// 	}

// 	return [...quickSortFn(left), ...middle, ...quickSortFn(right)];
// }

// const sortedArr = quickSortFn(arr);

// console.log(sortedArr);



function quickSelect(arr, left, right, k) {
	if (left === right) {
		return arr[left];
	}
	const pivotIndex = partFn(arr, left, right);
	const count = right - pivotIndex + 1;
	if (count === k) {
		return arr[pivotIndex];
	} else if (count > k) {
		return quickSelect(arr, pivotIndex + 1, right, k);
	} else {
		return quickSelect(arr, left, pivotIndex - 1, k - count);
	}
}
function partFn(arr, left, right) {
	const pivot = arr[right];
	let i = left;
	for (let j = left; j < right; j++) {
		if (arr[j] < pivot) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			i++;
		}
	}
	[arr[i], arr[right]] = [arr[right], arr[i]];
	return i;
}
const uniqueArr = [3, 2, 1, 5, 6, 4, 9];
const k = 2;
const result = quickSelect(uniqueArr, 0, uniqueArr.length - 1, k);
console.log(`k-наибольший элемент: ${result}`);
