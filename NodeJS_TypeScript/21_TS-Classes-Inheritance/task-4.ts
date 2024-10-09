// Использование фабричного метода -------------------------------------------------------

// 1. Создайте статический метод `createGuestUser`, который будет возвращать нового 
//    пользователя с предустановленными значениями имени и возраста. Например, пользователь 
//    будет иметь имя "Guest" и возраст 0.

// 2. Создайте статическое свойство `userCount`, которое будет хранить количество созданных 
//    объектов класса `User`. Увеличивайте это значение каждый раз, когда создается новый 
//    пользователь (то есть в конструкторе класса).

// class User {
//   // Свойства
//   name: string;
//   age: number;
//   role: string;
//   friends?: string[];
//   id?: number | string;

//   // Приватное свойство
//   private password?: string;

//   // Статическое свойство для хранения количества пользователей
//   static userCount: number = 0;

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

//     // Увеличиваем счетчик пользователей
//     User.userCount++;
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

//   // Статический метод для создания гостевого пользователя
//   static createGuestUser(): User {
//     return new User('Guest', 0, 'guest');
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

// // Создание обычных пользователей и администратора
// const user = new User("User1", 23, "simple", undefined, 1);
// const user2 = new User("User2", 30, "simple", undefined, 2);
// const admin = new Admin("Admin", 40, "admin", ["User1", "User2"], 3);

// // Приветствие
// user.greet();
// admin.greet();

// // Создание гостевого пользователя с помощью статического метода
// const guest = User.createGuestUser();
// guest.greet();

// // Отображение количества созданных пользователей
// console.log('Количество созданных пользователей: ' + User.userCount); // 4

// // Отображение списка всех пользователей
// admin.displayUsers();
