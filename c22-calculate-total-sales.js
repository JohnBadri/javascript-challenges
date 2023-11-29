function totalSales(salesArr, taxAmount) {
  const total = salesArr.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );
  return total + (taxAmount / 100) * total;
}

console.log(
  totalSales(
    [
      { name: 'Apple', price: 0.5, quantity: 10 },
      { name: 'Banana', price: 0.3, quantity: 20 },
      { name: 'Orange', price: 0.6, quantity: 15 },
    ],
    8
  )
);
