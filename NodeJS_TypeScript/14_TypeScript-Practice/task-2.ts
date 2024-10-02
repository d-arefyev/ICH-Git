// Task 2 ------- Типизация массива с числами ---------------------------------------------------

let scores: number[] = [100, 99, 98, 97, 96];

function avgScore(array: number[]): number {
  let total = array.reduce((sum, curr) => sum + curr, 0);
  return total / array.length;
}
console.log(`Средняя успеваемость студентов - ${avgScore(scores)} баллов`);

