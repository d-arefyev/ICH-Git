const delayPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      resolve("Операция прошла успешно");
    } else {
      reject("Что то пошло не так...");
    }
  }, 3000);
});

delayPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise finish");
  });
