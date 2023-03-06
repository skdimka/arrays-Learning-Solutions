const goals = [8, 1, 1, 3, 2, -1, 5];

let maxNumberOfGoals = goals[0];
let maxNumberOfGoalsIndex = 0;

let minNumberOfGoals = goals[0];

//Самый результативный матч по количеству голов
goals.forEach((goal, index) => {
    if (goal > maxNumberOfGoals) {
        maxNumberOfGoals = goal;
        maxNumberOfGoalsIndex = index;
    }
    if (goal < minNumberOfGoals && goal >= 0) {
        minNumberOfGoals = goal;
    }
})

//Самые нерезультативные игры.
const minNumberOfGoalsIndex = goals
    .map((goal, index) => goal === minNumberOfGoals ? index + 1 : -1)
    .filter((goalNumber) => goalNumber > 0);

console.log(`Самый результативный матч был под номером ${maxNumberOfGoalsIndex + 1}. В нем было забито ${maxNumberOfGoals} гол(ов).`);
console.log(`Самые нерезультативные матчи были под номерами ${minNumberOfGoalsIndex.join(", ")}. В каждом из них было забито по ${minNumberOfGoals} мячу(а)`);

//Общее количество голов за сезон
const numberOfGoalsSeason = goals.reduce((acc, goal) => {
    return goal >= 0 ? acc + goal : acc;
}, 0);

console.log(`Общее количество голов за сезон равно ${numberOfGoalsSeason}`);

//Были ли автоматические поражения
const automaticDefeat = goals.some((goal) => goal === -1);

if (automaticDefeat) {
    console.log('Были автоматические поражения: да')
} else {
    console.log('Были автоматические поражения: нет')
}

// сложить все голы за матчи, учтывая, что в массиве записаны и поражения
let match = 0;
for (const goal of goals) {
    if (goal >= 0) {
        match++;
    }
}

const averageAmount = Math.round(numberOfGoalsSeason / match);

console.log('Среднее количество голов за матч равно', averageAmount);

//Отсортируйте голы в порядке возрастания 
const goalsAscending = goals.sort((a, b) => { return b - a });

console.log(goalsAscending);