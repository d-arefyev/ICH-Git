const makeTriple = <T>(arg1: T, arg2: T, arg3: T): T[] => {
  return [arg1, arg2, arg3];
};

console.log(makeTriple(1, 2, 3));
console.log(makeTriple("a", "b", "c"));
