// Создание конструктора ------------------------------------------------------------------

// 1. Создайте класс `User`, который имеет два свойства: `name` (тип `string`)
//    и `age` (тип `number`).

// 2. Напишите конструктор, который принимает значения для имени и возраста и присваивает
//    их соответствующим свойствам.

// 3. Добавьте метод `greet`, который выводит в консоль сообщение с приветствием, включающим
//    имя пользователя.

// class User {
//   // Свойства
//   name: string;
//   age: number;
//   role: string;
//   friends?: string[];
//   id?: number | string;

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

//   // Методы класса

//   greet() {
//     console.log('Привет меня зовут ' + this.name + ' ' + 'Как твои дела?')
//   }
// }

// const user = new User("Admin", 23, "admin", undefined, 1);
// const user1 = new User('John', 32, 'simple', ['Friend 1'], 2);

// user.greet();
// user1.greet();
// console.log(user);
