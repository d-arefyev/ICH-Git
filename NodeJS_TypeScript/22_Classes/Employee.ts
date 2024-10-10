// Создание абстрактного класса `Employee` -------------------------------------------------------


// Абстрактный класс Employee
abstract class Employee {
  salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  // Общий метод для всех сотрудников
  work() {
    console.log("Employee is working");
  }

  // Абстрактный метод для расчета зарплаты
  abstract calcSalary(): number;
}

// Класс для сотрудников с полным рабочим днем
class FullTimeEmployee extends Employee {
  isRemote: boolean;

  constructor(salary: number, isRemote: boolean = false) {
    super(salary);
    this.isRemote = isRemote;
  }

  // Реализация расчета зарплаты для сотрудников с полным рабочим днем
  calcSalary(): number {
    return this.salary;
  }

  // Переопределение метода work
  work() {
    const remoteStatus = this.isRemote ? "remotely" : "on-site";
    console.log(`Full-time employee is working ${remoteStatus}`);
  }
}

// Класс для сотрудников с частичной занятостью
class PartTimeEmployee extends Employee {
  hoursWorked: number;
  hourRate: number;

  constructor(salary: number, hoursWorked: number, hourRate: number) {
    super(salary);
    this.hoursWorked = hoursWorked;
    this.hourRate = hourRate;
  }

  // Переопределение метода расчета зарплаты на основе отработанных часов
  calcSalary(): number {
    return this.hoursWorked * this.hourRate;
  }

  work() {
    console.log(`Part-time employee is working ${this.hoursWorked} hours`);
  }
}

// Класс для волонтеров
class VolunterEmployee extends Employee {
  // Волонтер не получает зарплату, возвращаем 0
  calcSalary(): number {
    return 0;
  }

  work() {
    console.log("Volunteer is working for free");
  }
}

// Пример использования классов
const fullTimeEmployee = new FullTimeEmployee(5000, true); // Полный рабочий день, удаленно
const partTimeEmployee = new PartTimeEmployee(3000, 20, 15); // Частичная занятость, 20 часов по ставке 15
const volunteer = new VolunterEmployee(0); // Волонтер

// Вызов методов work и calcSalary для разных типов сотрудников
fullTimeEmployee.work(); // Full-time employee is working remotely
console.log(`Full-Time Employee Salary: $${fullTimeEmployee.calcSalary()}`); // 5000

partTimeEmployee.work(); // Part-time employee is working 20 hours
console.log(`Part-Time Employee Salary: $${partTimeEmployee.calcSalary()}`); // 300 (20 * 15)

volunteer.work(); // Volunteer is working for free
console.log(`Volunteer Salary: $${volunteer.calcSalary()}`); // 0
