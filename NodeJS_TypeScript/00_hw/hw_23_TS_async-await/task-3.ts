// Обработка ошибки в параллельных промисах --------------------------------------------------

function createPromise(id: number, shouldReject: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
      const delay = Math.random() * 2000 + 1000; // случайная задержка от 1 до 3 секунд
      setTimeout(() => {
          if (shouldReject) {
              reject(`Промис ${id} завершился с ошибкой!`);
          } else {
              resolve(`Промис ${id} завершился успешно!`);
          }
      }, delay);
  });
}

async function processPromises() {
  try {
      const promises = [
          createPromise(1, false),
          createPromise(2, false),
          createPromise(3, true)
      ];

      const results = await Promise.all(promises);
      console.log("Все промисы завершились:", results);
  } catch (error) {
      console.error("Ошибка при выполнении промисов:", error);
  }
}

processPromises();
