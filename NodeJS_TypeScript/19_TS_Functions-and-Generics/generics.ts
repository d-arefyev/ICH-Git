// generics ---------------------------------------------------------------------------

const foo = <T>(param1: T): T => param1;

foo<string>("string");
foo(42);
foo(true);

// Frontend
const [state, setState] = useState();