function greet(name) {
    return "Hello, ".concat(name, "!");
}
var message = greet("World");
console.log(message);
// Использование 2-х типов данных в одной переменной
function returnString(name, age) {
    return "Name: ".concat(name, " age: ").concat(age);
}
console.log(returnString("Andrew", 20));
