function fetchDataFromAPI(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Данные");
    }, 2000);
  });
}

function fetchDataFromAPIReject(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ошибка");
    }, 2000);
  });
}

async function fetchAllData() {
  try {
    const result = await Promise.all([
      fetchDataFromAPI(),
      fetchDataFromAPIReject(),
    ]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  console.log("Загрузка завершена");
}

fetchAllData();
