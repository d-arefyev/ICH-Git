// class User {
//   // Свойства
//   private name: string;
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
//     console.log("Привет меня зовут " + this.name + " " + "Как твои дела?");
//   }
//   logout() {
//     //
//   }
//   // Setters
//   public setName(newName: string) {
//     this.name = newName;
//   }
//   // Getters
//   public getName() {
//     return this.name;
//   }
// }

// const user = new User("Admin", 23, "admin", undefined, 1);
// const user1 = new User("John", 32, "simple", ["Friend 1"], 2);
// console.log(user.getName());
// user.setName("Admin test");
// // console.log(user.name);
// user.greet();
// user1.greet();
// // console.log(user);
