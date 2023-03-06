const getSumOfSequence = number => {
    let userArray = [];
    for (i = 1; i <= number; i++) {
        userArray.push(i);
    };
    console.log(userArray);
    const sum = userArray[0] + userArray[userArray.length - 1];
    console.log(sum);
};

getSumOfSequence(5);