// Interface ---------------------------------------------------------------------------

// Инкапсуляция
interface ComponentProps {
  key1: number; // state
  key2: string; // state
  keyFoo: (a: number) => number; // methods
  getKey1: () => number;
}

// Пример использования с логированием
const componentProps: ComponentProps = {
  key1: 10,
  key2: "Hello",

  keyFoo: (a: number) => {
    console.log(`keyFoo called with argument: ${a}`);
    return a * 2;
  },

  getKey1: () => {
    console.log("getKey1 called");
    return componentProps.key1;
  },
};

// Пример вызовов
console.log("Initial value of key1:", componentProps.getKey1());
const fooResult = componentProps.keyFoo(5);
console.log("Result from keyFoo:", fooResult);
