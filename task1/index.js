const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

// function giveParcel(index = 0) {
//     console.log('Посылку получил(а):', peopleWaiting[index]);
//     peopleWaiting = peopleWaiting.splice(index + 1);
//     console.log('Человек в очереди', peopleWaiting.length, 'Очередь:', peopleWaiting);
// }

// giveParcel()
// giveParcel()
// giveParcel()


// function leaveQueueWithoutParcel(index = peopleWaiting.length) {
//     console.log('Посылку покинул(а):', peopleWaiting[peopleWaiting.length - 1]);
//     peopleWaiting = peopleWaiting.slice(0, index - 1);
//     console.log('Человек в очереди', peopleWaiting.length, 'Очередь:', peopleWaiting);
// }

// leaveQueueWithoutParcel()
// leaveQueueWithoutParcel()
// leaveQueueWithoutParcel()
// leaveQueueWithoutParcel()

function giveParcel() {
    const namePeopleReceivedParcel = peopleWaiting.shift();
    console.log(peopleWaiting)
};

function leaveQueueWithoutParcel() {
    const nameLeaveWaiting = peopleWaiting.pop();
    console.log(peopleWaiting);
};

giveParcel()
giveParcel()
giveParcel()

for (i = peopleWaiting.length; i > 0; i--) {
    leaveQueueWithoutParcel();
}