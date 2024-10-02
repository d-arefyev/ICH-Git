// Task 6 ------------- Функция с типом `void` и `never` -------------------------------------------

function logMessage(message: string): void {
  console.log(message);
}

function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}

function infinityLoop(): never { // бесконечный цикл, который повесит комп
  while (true) {
    console.log("Infinity loop");
  }
}

logMessage("Simple message");
throwError("Error message");
logMessage("Simple message two"); // после ошибки функция ничего не вернет
