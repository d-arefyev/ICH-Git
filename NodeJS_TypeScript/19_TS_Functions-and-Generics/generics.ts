// generics ---------------------------------------------------------------------------

const foo = <T>(param1: T): T => param1;

foo<string>("string");
foo(42);
foo(true);

// Frontend
// const [state, setState] = useState();

function getFirstElement<T>(array: T[]): T {
  return array[0];
}

getFirstElement([10, 42, 43, "string"]);

function createPair<T, Q>(numb1: T, numb2: Q): [T, Q] {
  return [numb1, numb2];
}

createPair(20, 22);
createPair("str1", "str2");
