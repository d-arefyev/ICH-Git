interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(person: Person): void {
  console.log(`
    Name: ${person.name} 
    Age: ${person.age}
    City: ${person.city}
    `);
}

const person: Person = { name: "Denis", age: 43, city: "Hamburg" };
printPersonInfo(person);
