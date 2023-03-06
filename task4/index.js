const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

let updatedPrices = prices.map((price) => { return price + 0.5 });
console.log(updatedPrices);

coffees.forEach((coffeeName, index) => { console.log(`Кофе ${coffeeName} сейчас стоит ${updatedPrices[index]} евро`) });