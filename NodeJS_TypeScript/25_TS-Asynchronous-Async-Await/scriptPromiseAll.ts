// Promise.all

const httpPromise = Promise.resolve(42);
const timerPromise = new Promise((resolve) =>
  setTimeout(resolve, 5000, "function")
);
const eventPromise = Promise.resolve(1000);

Promise.all([httpPromise, timerPromise, eventPromise]).then((values) =>
  console.log(values)
);
