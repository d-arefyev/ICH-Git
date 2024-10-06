// task-3 ---- Interface for a function with an object ------------------------------------------

interface Product {
  name: string;
  price: number;
}

function calculateDiscount(product: Product, discount: number): number {
  return product.price - (product.price * discount) / 100;
}

const product: Product = { name: "Laptop", price: 999 };
console.log(calculateDiscount(product, 15));
