// Вложенные пространства имен для управления пользователями -------------------------------------------------

/// <reference path="3-userManagement.ts" />

// Создание нового администратора
const adminUser = new UserManagement.Admin.AdminUser("John Doe", "john.doe@example.com");

// Вывод информации об администраторе
console.log(adminUser.getInfo());

// Изменение прав доступа
adminUser.toggleSuperAdmin(); // Сделаем его супер администратором
console.log(adminUser.getInfo()); // Выводим обновленную информацию

adminUser.toggleSuperAdmin(); // Отменяем права супер администратора
console.log(adminUser.getInfo()); // Выводим обновленную информацию
