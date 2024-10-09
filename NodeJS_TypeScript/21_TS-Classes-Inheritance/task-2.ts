// Создание приватного свойства и публичного метода ---------------------------------------

// 1. Измените класс `User`, добавив приватное свойство `password`, которое будет хранить 
//    пароль пользователя.

// 2. Добавьте публичный метод для установки пароля (например, `setPassword(password: string)`), 
//    который позволит менять значение этого приватного свойства.

// 3. Создайте публичный метод `checkPassword(password: string)`, который будет проверять 
//    корректность введенного пароля и возвращать `true` или `false`.

// class User {
//   // Свойства
//   name: string;
//   age: number;
//   role: string;
//   friends?: string[];
//   id?: number | string;

//   // Приватное свойство
//   private password?: string;

//   // Конструктор
//   constructor(
//     name: string,
//     age: number,
//     role: string,
//     friends?: string[],
//     id?: number | string
//   ) {
//     this.name = name;
//     this.age = age;
//     this.role = role;
//     this.friends = friends;
//     this.id = id;
//   }

//   // Метод для установки пароля
//   setPassword(password: string) {
//     this.password = password;
//   }

//   // Метод для проверки пароля
//   checkPassword(password: string): boolean {
//     return this.password === password;
//   }

//   // Приветствие
//   greet() {
//     console.log('Привет, меня зовут ' + this.name + '. Как твои дела?');
//   }
// }

// // Создание пользователей
// const user = new User("Admin", 23, "admin", undefined, 1);
// const user1 = new User('Denis', 43, 'simple', ['Friend 1'], 2);

// // Установка пароля
// user.setPassword('admin123');
// user1.setPassword('12345');

// // Проверка пароля
// console.log(user.checkPassword('admin123'));
// console.log(user1.checkPassword('54321'));

// // Приветствие
// user.greet();
// user1.greet();
