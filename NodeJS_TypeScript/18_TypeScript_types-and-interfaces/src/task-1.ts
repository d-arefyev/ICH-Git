type StringOrNumber = string | number;

let stringOrNumber: StringOrNumber;
stringOrNumber = "Hello World!";

type StringOrNumberOrNull = StringOrNumber | null;

const calcStringCharOrPowNumber = (
  value: StringOrNumber
): StringOrNumberOrNull => {
  if (typeof value === "string") {
    return `String length: ${value.length}`;
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    return null;
  }
};
