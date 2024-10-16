// Обработка цепочки промисов с `async/await` --------------------------------------------------

async function taskOne() {
  return new Promise<string>((resolve) => {
      setTimeout(() => {
          console.log("Task One выполнена");
          resolve("Результат задачи 1");
      }, 1000);
  });
}

async function taskTwo() {
  return new Promise<string>((resolve) => {
      setTimeout(() => {
          console.log("Task Two выполнена");
          resolve("Результат задачи 2");
      }, 3000);
  });
}

async function taskThree() {
  return new Promise<string>((resolve) => {
      setTimeout(() => {
          console.log("Task Three выполнена");
          resolve("Результат задачи 3");
      }, 1500);
  });
}

async function executeTasks() {
  const result1 = await taskOne();
  console.log(result1);
  
  const result2 = await taskTwo();
  console.log(result2);
  
  const result3 = await taskThree();
  console.log(result3);
}

executeTasks();
