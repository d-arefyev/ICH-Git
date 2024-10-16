// Асинхронная функция с динамическим временем выполнения --------------------------------------------

async function processDelays(delays: number[]) {
  const promises = delays.map((delay) => {
      return new Promise<string>((resolve) => {
          setTimeout(() => {
              resolve(`Задержка ${delay} мс завершилась!`);
          }, delay);
      });
  });

  try {
      const results = await Promise.all(promises);
      console.log("Все промисы завершились:", results);
  } catch (error) {
      console.error("Ошибка:", error);
  }
}

const delayTimes = [1000, 2000, 1500, 3000];
processDelays(delayTimes);
