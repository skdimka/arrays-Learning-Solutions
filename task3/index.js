const coffees = ['Latte', 'Cappuccino', 'Americano'];

let coffeeName = prompt('Напишите Ваш любимый кофе');
coffeeName = coffeeName.trim().toLowerCase();
console.log('User like Coffee:', coffeeName);

const ratingCoffeIndex = coffees.findIndex((coffee) =>
    coffee.toLowerCase() === coffeeName);
const ratingCoffe = coffees[ratingCoffeIndex];

console.log('Index Coffee to top:', ratingCoffeIndex + 1);
console.log('Coffee to top:', ratingCoffe);
