class Stack {
    constructor() {
        this.stack = []; // Инициализируем пустой массив для хранения элементов стека
    }

    // Проверка стека на пустоту
    empty() {
        return this.stack.length === 0; // Возвращает true, если стек пустой
    }

    // Вставка нового элемента в стек
    push(element) {
        this.stack.push(element); // Добавляем элемент в конец массива (вершина стека)
    }

    // Удаление элемента с вершины стека
    pop() {
        if (this.empty()) {
            return 'Стек пустой'; // Если стек пуст, возвращаем сообщение
        }
        return this.stack.pop(); // Удаляем и возвращаем последний элемент массива (вершина стека)
    }

    // Возвращает элемент с вершины стека, но не удаляет его
    peek() {
        if (this.empty()) {
            return 'Стек пустой'; // Если стек пуст, возвращаем сообщение
        }
        return this.stack[this.stack.length - 1]; // Возвращаем последний элемент массива (вершина стека)
    }

    // Поиск элемента в стеке, возвращает его позицию относительно вершины
    search(element) {
        const index = this.stack.lastIndexOf(element); // Находим индекс элемента с конца массива
        if (index === -1) {
            return -1; // Если элемент не найден, возвращаем -1
        }
        return this.stack.length - 1 - index; // Возвращаем позицию элемента относительно вершины стека
    }
}

// Пример использования стека
const myStack = new Stack();

// Проверка пустоты
console.log(myStack.empty()); // true

// Добавление элементов
myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack.empty()); // false

// Получение верхнего элемента без удаления
console.log(myStack.peek()); // 30

// Поиск элемента
console.log(myStack.search(20)); // 1 (позиция с вершины стека)
console.log(myStack.search(40)); // -1 (элемент не найден)

// Удаление элемента
console.log(myStack.pop()); // 30 (удаляем вершину)
console.log(myStack.peek()); // 20 (новая вершина)

console.log(myStack.pop()); // 20
console.log(myStack.pop()); // 10
console.log(myStack.pop()); // 'Стек пустой' (больше нет элементов)
