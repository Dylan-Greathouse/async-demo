const startWorkoutBtn = document.getElementById('start-workout');
const secondsSpan = document.getElementById('seconds');
let seconds = 0;
let interval;

startWorkoutBtn.addEventListener('click', () => {
    interval = setInterval(() => {
        seconds += 1;
        secondsSpan.textContent = seconds;
    }, 1000);
    workout();
});

const doPushups = (nextExercise) => {
    const li = document.getElementById('pushups');
    li.classList.add('active');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            li.classList.add('completed');
            li.classList.remove('active');
            resolve();
        }, 3000);
    });
};
const doSitups = (nextExercise) => {
    console.log('starting situps!');
    const li = document.getElementById('situps');
    li.classList.add('active');
    return new Promise((resolve) => {
        setTimeout(() => {
            li.classList.add('completed');
            li.classList.remove('active');
            resolve();
        }, 5000);
    });
};

const doJumpingJacks = (nextExercise) => {
    const li = document.getElementById('jumping-jacks');
    li.classList.add('active');
    return new Promise((resolve) => {
        setTimeout(() => {
            li.classList.add('completed');
            li.classList.remove('active');
            resolve();
        }, 2000);
    });
};

async function workout() {
    await doPushups();
    await doSitups();
    await doJumpingJacks();
    clearInterval(interval);
}
