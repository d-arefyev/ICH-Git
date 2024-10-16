// Асинхронная обработка данных из массива --------------------------------------------------

async function processString(str: string): Promise<string> {
  return new Promise<string>((resolve) => {
      setTimeout(() => {
          console.log(`Обработка строки: ${str}`);
          resolve(str.toUpperCase());
      }, 1000); // Задержка 1 секунда
  });
}

// Функция, которая принимает массив строк и обрабатывает их
async function processStrings(strings: string[]): Promise<string[]> {
  // Создаем массив промисов для каждой строки
  const promises = strings.map(processString);
  
  // Ждем завершения всех промисов
  const results = await Promise.all(promises);
  
  return results;
}

// Пример использования
async function main() {
  const strings = ["hello", "world", "async", "functions", "typescript"];
  
  // Обрабатываем строки и выводим результаты
  const results = await processStrings(strings);
  console.log("Результаты обработки:", results);
}

main();
