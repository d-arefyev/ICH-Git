// Task 3 -------- Кортежи (tuples) ------------------------------------------------------

let personInfo: [string, number] = ["Jack", 22];

function printPersonInfo([zero, first]: [string, number]): void {
  //   const [zero, first] = person;
  console.log(`
    User name: ${zero}
    User age: ${first}
`);
}
printPersonInfo(personInfo);


/*
    responce = {
        dinamo: [{},{},{},{},{}],
        inter: [],
        real: []
    }


*/