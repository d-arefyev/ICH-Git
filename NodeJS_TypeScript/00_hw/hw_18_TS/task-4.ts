// task-4 ---- Array of objects and functions --------------------------------------------------

interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { name: "Andrey", salary: 50000 },
  { name: "Denis", salary: 60000 },
  { name: "Xeniya", salary: 70000 }
];

function getSalaries(employees: Employee[]): number[] {
  return employees.map((employee) => employee.salary);
}

console.log(getSalaries(employees));
