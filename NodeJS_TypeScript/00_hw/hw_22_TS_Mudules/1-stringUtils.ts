// Модули для работы со строками --------------------------------------------------------------------

// Функция capitalize: делает первую букву строки заглавной
export function capitalize(str: string): string {
  if (!str) return '';  // Проверка на пустую строку
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Функция reverseString: переворачивает строку задом наперед
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
