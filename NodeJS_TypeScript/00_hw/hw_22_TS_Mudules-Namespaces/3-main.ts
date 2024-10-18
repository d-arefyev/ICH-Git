// Вложенные пространства имен для управления пользователями -------------------------------------------------

// <reference path="3-userManagement.ts" />

import { UserManagement } from './3-userManagement';

// Создание нового администратора
const adminUser = new UserManagement.Admin.AdminUser("Test Test", "test.test@example.com");

// Вывод информации об администраторе
console.log(adminUser.getInfo());

// Изменение прав доступа
adminUser.toggleSuperAdmin(); // Сделаем его супер администратором
console.log(adminUser.getInfo()); // Выводим обновленную информацию

adminUser.toggleSuperAdmin(); // Отменяем права супер администратора
console.log(adminUser.getInfo()); // Выводим обновленную информацию