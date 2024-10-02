// Task 5 --------------- Обработка неизвестного типа -----------------------------------------------

let data: unknown;

function proccesData(data: unknown): number | null {
  if (typeof data === "string") {
    return data.length;
  } else if (typeof data === "number") {
    return data * data;
  } else {
    return null;
  }
}

data = 42;
console.log(proccesData(data));

data = 'Привет мир, меня зовут Денис. Как ваши дела? Еще что-нибудь...'
console.log(proccesData(data));

data = false;
console.log(proccesData(data));