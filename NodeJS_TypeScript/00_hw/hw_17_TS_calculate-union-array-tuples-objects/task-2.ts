// Task-2 --- union --------------------------------------------------------

let id: string | number;

function displayId(id: string | number): void {
    if (typeof id === 'string') {
        console.log(`ID: ${id.toUpperCase()}`);
    } else if (typeof id === 'number') {
        console.log(`ID: ${id * 10}`);
    }
}

id = 'abc123';
displayId(id);

id = 5;
displayId(id);
