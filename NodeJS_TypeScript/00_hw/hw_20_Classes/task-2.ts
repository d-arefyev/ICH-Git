// Статическое свойство для учета всех книг ---------------------------------------------------

class Library {
  static totalBooks: number = 0;

  // Метод для добавления книги и увеличения общего количества книг
  static addBooks(count: number = 1) {
    Library.totalBooks += count; // Увеличение счетчика на указанное количество книг
  }

  // Статический метод для получения общего количества книг
  static getTotalBooks() {
    return Library.totalBooks;
  }
}

Library.addBooks(); // + 1 книга
Library.addBooks(); // + ещё 1 книга
Library.addBooks(3); // + 3 книги

console.log(Library.getTotalBooks());
