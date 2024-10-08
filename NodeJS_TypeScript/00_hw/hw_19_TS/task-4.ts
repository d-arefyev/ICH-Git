const getLastElement = <T>(arr: T[]): T | undefined => {
  return arr.length > 0 ? arr[arr.length - 1] : undefined;
};

console.log(getLastElement([1, 2, 3, 4, 5]));
console.log(getLastElement(["a", "b", "c", "d", "e"]));
