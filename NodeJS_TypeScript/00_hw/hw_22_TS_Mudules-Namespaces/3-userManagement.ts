// Вложенные пространства имен для управления пользователями -------------------------------------------------

export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      public name: string;
      public email: string;
      public isSuperAdmin: boolean;

      constructor(name: string, email: string, isSuperAdmin: boolean = false) {
        this.name = name;
        this.email = email;
        this.isSuperAdmin = isSuperAdmin;
      }

      // Метод для изменения прав доступа
      public toggleSuperAdmin(): void {
        this.isSuperAdmin = !this.isSuperAdmin;
        console.log(
          `${this.name} is now ${
            this.isSuperAdmin ? "a Super Admin" : "not a Super Admin"
          }.`
        );
      }

      // Метод для вывода информации об администраторе
      public getInfo(): string {
        return `Name: ${this.name}, Email: ${this.email}, Super Admin: ${this.isSuperAdmin}`;
      }
    }
  }
}
