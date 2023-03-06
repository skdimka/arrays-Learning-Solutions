const numbers = [10, 4, 100, -5, 54, 2];

//for

let sumSquareNumbers1 = 0;

for (i = 0; i < numbers.length; i++) {
    sumSquareNumbers1 += numbers[i] ** 3;
}
console.log(sumSquareNumbers1);

//for of
let sumSquareNumbers2 = 0;

for (const number of numbers) {
    sumSquareNumbers2 += number ** 3
}
console.log(sumSquareNumbers2);

//forEach
let sumSquareNumbers3 = 0;
numbers.forEach((number) => {
    sumSquareNumbers3 += number ** 3;
})
console.log(sumSquareNumbers3)


//reduce
let sumSquareNumbers4 = numbers.reduce((sumSquare, number) => {
    return sumSquare + number ** 3
}, 0);
console.log(sumSquareNumbers4);


