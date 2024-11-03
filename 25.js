function product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

product.prototype.calculateTotalValue = function () {
  return this.price * this.quantity;
};

const product1 = new product("Widget", 10, 5);
const product2 = new product("Car", 233, 24);
const totalValueproduct1 = product1.calculateTotalValue();
const totalValueproduct2 = product2.calculateTotalValue();
console.log(`Total value of ${product1.name}: $${totalValueproduct1}`);
console.log(`Total value of ${product2.name}: $${totalValueproduct2}`);
console.log(product.prototype);
console.log(product1);
console.log(product2);
