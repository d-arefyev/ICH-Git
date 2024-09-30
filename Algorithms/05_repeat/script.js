// Прикладное программирование ----------------------------------
// const infoAboutMe = {
//   myName: 'Yury',
//   lastName: 'Arakelov',
//   age: 27,
//   university: 'heheheh',
//   pet: 'Horhen',
//   car: 'Toyota',
//   model: 'Camry',
//   isProgrammer: true
// }

// const keys = Object.keys(infoAboutMe)
// const values = Object.values(infoAboutMe)
// // console.log(keys, values);

// const result = Object.entries(infoAboutMe)
// .map(([key, value]) => ({key, value}))

// const randomArr = ['myName', 'Yury']
// const [key, value] = randomArr
// const posts = []

// console.log(result);


// return (

//     <div>
//         result.map(item => (

//             <div>
//                 <p>{item.key}</p>
//                 <p>{item.value}</p>
//             </div>
//         ))
//     </div>

// )


//factorial (прямая рекурсия) ----------------------------------
// n! = n * (n - 1) * (n - 2) * ... * 1

// function factorial(n) {
//   if(n === 0 || n === 1) {
//       return 1
//   }

//   return n * factorial(n - 1)
// }
// console.log(factorial(7))



//fibonnachi (двусторонняя рекурсия) ---------------------------
// F(0) = 0
// F(1) = 1
// F(n) = F(n - 1) + F(n - 2) при n > 1

// function fib(n) {
//   if(n === 0) {
//       return 0
//   }

//   if(n === 1) {
//       return 1
//   }

//   return fib(n - 1) + fib(n - 2)
// }

// 0, 1, 1, 2, 3, 5,

// console.log(fib(5))


// Алгоритм сортировки слиянием ---------------------------
// function mergeSort(arr) {
//   if(arr.length === 1 || arr.length === 0) {
//       return arr
//   }

//   let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)))
//   let right = mergeSort(arr.slice(Math.floor(arr.length / 2)))
//   let n = 0, m = 0, k = 0
//   let c = new Array(arr.length)

//   while(n < left.length && m < right.length) {
//       if(left[n] <= right[m]) {
//           c[k] = left[n]
//           n++
//       } else {
//           c[k] = right[m]
//           m++
//       }
//       k++
//   }

//   while(n < left.length) {
//       c[k] = left[n]
//       n++
//       k++
//   }
//   while(m < right.length) {
//       c[k] = right[m]
//       m++
//       k++
//   }
//   for(let i = 0; i < arr.length; i++) {
//       arr[i] = c[i]
//   }

//   return arr   
// }


// mergeSort -------------------------------------------
function merge(arr, start, mid, end) {
  let start2 = mid + 1;

  if (arr[mid] <= arr[start2]) {
      return;
  }

  while (start <= mid && start2 <= end) {
      if (arr[start] <= arr[start2]) {
          start++;
      } else {
          let value = arr[start2];
          let index = start2;
          while (index !== start) {
              arr[index] = arr[index - 1];
              index--;
          }

          arr[start] = value;

          start++;
          mid++;
          start2++;
      }
  }
}

function mergeSort(arr, l, r) {
  if (l < r) {
      let m = l + Math.floor((r - l) / 2);

      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);
      merge(arr, l, m, r);
  }
}

const array = [5, 6, 3, 4]
mergeSort(array, 0, array.length - 1)
console.log(array[0])
