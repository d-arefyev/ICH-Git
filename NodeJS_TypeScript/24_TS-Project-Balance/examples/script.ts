// Promise это обьект
// Pending - состояние ожидания промиса
// Fulfilled - состояние промиса при успешном выполнении
// Rejected - состояние примиса при ошибке выполнения

const customPromise = new Promise<number>((resolve, reject) => {
  const isSuccess = true;
  if (isSuccess) {
    resolve(42);
  } else {
    reject("Что то пошло не так...");
  }
});

// .then().then().catch().finally()
customPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("Finally result");
  });
