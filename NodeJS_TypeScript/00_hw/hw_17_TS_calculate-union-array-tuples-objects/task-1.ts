// Task-1 --- calculate --------------------------------------------------------

function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  const total = price * quantity - discount;
  return total < 0 ? 0 : total; // Общая стоимость не может быть меньше нуля
}

const totalCost = calculateTotal(100, 5, 10);
console.log(`Общая стоимость: ${totalCost}`);
