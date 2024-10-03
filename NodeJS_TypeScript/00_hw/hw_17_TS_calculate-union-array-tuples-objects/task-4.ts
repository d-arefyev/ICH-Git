// Task-4 --- tuples and objects --------------------------------------------------------

type ProductInfo = [string, number, number]; // [название товара, цена, количество на складе]

const productInfo: ProductInfo = ["Laptop", 1000, 50];

function updateStock(
  inventory: { [key: string]: number },
  productInfo: ProductInfo
): { [key: string]: number } {
  const [productName, price, quantity] = productInfo;
  inventory[productName] = (inventory[productName] || 0) + quantity; // Обновляем количество товара
  return inventory;
}

let inventory: { [key: string]: number } = { Laptop: 20 };
inventory = updateStock(inventory, productInfo);
console.log(inventory);
