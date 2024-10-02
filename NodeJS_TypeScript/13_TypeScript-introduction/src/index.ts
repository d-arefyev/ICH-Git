function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message = greet("World");
console.log(message);



// Использование 2-х типов данных в одной переменной
function returnString(name: string, age: number): string | number {
  return `Name: ${name} age: ${age}`;
}

console.log(returnString("Andrew", 20));

  
