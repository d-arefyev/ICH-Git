// Синхронные
function addNumberSync() {
    return 4;
}

// Асинхронные
// Pending Reject Fulfilled
function addNumberAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Resolve")
            resolve(5)
        }, 2000)
    })
}

console.log(addNumberSync());

console.log(addNumberAsync());

let counter = 0;

for (let i = 0; i < 10000000; i++) {
    for (let j = 0; j < 100000; j++) {
        counter++;
    }
}

console.log(addNumberSync());