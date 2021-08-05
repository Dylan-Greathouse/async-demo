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

const doPushups = () => {
    const li = document.getElementById('pushups');
    li.classList.add('active');
    setTimeout(() => {
        li.classList.add('completed');
        li.classList.remove('active');
    }, 3000);
};
const doSitups = () => {
    const li = document.getElementById('situps');
    li.classList.add('active');
    setTimeout(() => {
        li.classList.add('completed');
        li.classList.remove('active');
    }, 5000);
};

const doJumpingJacks = () => {
    const li = document.getElementById('jumping-jacks');
    li.classList.add('active');
    setTimeout(() => {
        li.classList.add('completed');
        li.classList.remove('active');
    }, 2000);
};

function workout() {
    doPushups();
    doSitups();
    doJumpingJacks();
    clearInterval(interval);
}
