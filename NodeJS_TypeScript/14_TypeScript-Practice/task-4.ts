// Task 4 --------------- Массив объектов -----------------------------------------------

interface Product {
  name: string;
  price: number;
  isStock: boolean;
}

let products: Product[] = [
  { name: "Beer", price: 4.5, isStock: false },
  { name: "Milk", price: 3.2, isStock: true },
  { name: "Flowers", price: 10, isStock: true },
];
function listAvailableProducts(array: Product[]): void {
  let filteredArray = array.filter((product) => product.isStock);
  filteredArray.forEach((product) => console.log(product.name));
}
listAvailableProducts(products);
