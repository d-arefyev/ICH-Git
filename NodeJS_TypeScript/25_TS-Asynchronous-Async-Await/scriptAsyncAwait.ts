// Async Await
async function fetchData() {
  return "данные пришли";
}

async function fetchDataDelay() {
  console.log("Начало операции");
  const data = await new Promise<string>((resolve) => {
    setTimeout(() => {
      console.log("Resolved");
      resolve("42");
    }, 1500);
  });
  console.log("Конец операции");
  return data;
}

// const result = fetchData();
const result = fetchDataDelay();
result.then((result) => console.log(result));

console.log("Конец Файла - Последняя операция");
