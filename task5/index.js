let clientsEstimations = [];
let goodEstimations = 0;
let notGoodEstimations = 0;


const askClientToGiveEstimation = () => {
    let clientAnswer = prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
    if (clientAnswer >= 1 && clientAnswer <= 10) {
        clientsEstimations.push(clientAnswer);
    }
    console.log(clientsEstimations);
};

for (i = 0; i < 5; i++) {
    askClientToGiveEstimation();
};

clientsEstimations.filter(estimation => {
    if (estimation > 5) {
        goodEstimations++;
    }
    if (estimation <= 5) {
        notGoodEstimations++;
    }
});

// const goodEstimations = clientsEstimations.filter((estimation) => estimation > 5);
// const notGoodEstimations = clientsEstimations.filter((estimation) => estimation <= 5);

console.log(goodEstimations);
console.log(notGoodEstimations);
