type CompareStrings = (str1: string, str2: string) => boolean;

const areStringsEqual: CompareStrings = (str1, str2) => str1 === str2;

console.log(areStringsEqual("hello", "hello"));
console.log(areStringsEqual("hello", "world"));
