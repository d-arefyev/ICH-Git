// decorators ---------------------------------------------------------------------------

// Декоратор - функция обвертка
function decorator(fn) {
  return function () {
    console.log(`Calling function: ${fn.name}`);
    fn();
  }
}

function foo1() {
  console.log("Executing foo1");
}

function foo2() {
  console.log("Executing foo2");
}

// Применение декоратора
const decoratedFoo1 = decorator(foo1);
const decoratedFoo2 = decorator(foo2);

// Вызовы с логированием
decoratedFoo1();
decoratedFoo2();
