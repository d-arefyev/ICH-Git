// Создание класса `Admin` ----------------------------------------------------------------

// 1. Создание класса Admin
//    - Создайте класс `Admin`, который наследуется от `User`.
//    - Добавьте в класс `Admin` метод `displayUsers()`, который выводит в консоль список 
//      всех пользователей.
// Для этого создайте статический массив `users` в классе `User`, куда будете добавлять 
// созданных пользователей.

// 2. Переопределение метода greet
// В классе `Admin` переопределите метод `greet()`, чтобы он выводил сообщение о том, 
// что пользователь является администратором.

// class User {
//   // Свойства
//   name: string;
//   age: number;
//   role: string;
//   friends?: string[];
//   id?: number | string;

//   // Приватное свойство
//   private password?: string;

//   // Статический массив для хранения всех пользователей
//   static users: User[] = [];

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

//     // Добавляем созданного пользователя в статический массив users
//     User.users.push(this);
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

// // Класс Admin, который наследует класс User
// class Admin extends User {
//   constructor(name: string, age: number, role: string, friends?: string[], id?: number | string) {
//     super(name, age, role, friends, id);
//   }

//   // Переопределение метода greet для админа
//   greet() {
//     console.log(`Привет, я администратор. Меня зовут ${this.name}.`);
//   }

//   // Метод для вывода всех пользователей
//   displayUsers() {
//     console.log('Список всех пользователей:');
//     User.users.forEach(user => {
//       console.log(`Имя: ${user.name}, Роль: ${user.role}`);
//     });
//   }
// }

// // Создание пользователей и админа
// const user = new User("User1", 23, "simple", undefined, 1);
// const user2 = new User("User2", 30, "simple", undefined, 2);
// const admin = new Admin("Admin", 40, "admin", ["User1", "User2"], 3);

// // Приветствие
// user.greet(); // Привет, меня зовут User1. Как твои дела?
// admin.greet(); // Привет, я администратор. Меня зовут Admin.

// // Отображение списка всех пользователей через метод Admin
// admin.displayUsers(); 
