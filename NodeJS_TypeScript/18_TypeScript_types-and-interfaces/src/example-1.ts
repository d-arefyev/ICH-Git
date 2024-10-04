// Object и Class
interface Person {
  firstName?: string;
  lastName?: string;
  age?: boolean;
}
interface Person {
  isWork: boolean;
}
interface Person {
  salary?: number;
}
// interface Employee extends Person {
//   salary: number;
// }
let obj2: Person;
obj2 = { isWork: true };
let obj3: Person = { isWork: true, firstName: "John" };
console.log(obj2);

// Universal
type PersonType = {
  firstName?: string;
  lastName: string;
  age: boolean;
};

type EmployeeType = {
  salary: number;
};

type PersonEmployeeType = PersonType & EmployeeType;

type TestType = string;

let objType: PersonEmployeeType;
