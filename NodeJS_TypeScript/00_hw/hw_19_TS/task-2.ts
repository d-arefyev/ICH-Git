interface StringToBooleanFunction {
  (str: string): boolean;
}

const isEmptyString: StringToBooleanFunction = (str) => str === "";

console.log(isEmptyString("")); 
console.log(isEmptyString("Hello"));
