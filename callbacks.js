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
    setTimeout(() => {
        li.querySelector("input[type='checkbox']").checked = true;
        li.classList.add('completed');
        li.classList.remove('active');
        nextExercise();
    }, 3000);
};
const doSitups = (nextExercise) => {
    const li = document.getElementById('situps');
    li.classList.add('active');
    setTimeout(() => {
        li.querySelector("input[type='checkbox']").checked = true;
        li.classList.add('completed');
        li.classList.remove('active');
        nextExercise();
    }, 5000);
};

const doJumpingJacks = (nextExercise) => {
    const li = document.getElementById('jumping-jacks');
    li.classList.add('active');
    setTimeout(() => {
        li.querySelector("input[type='checkbox']").checked = true;
        li.classList.add('completed');
        li.classList.remove('active');
        nextExercise();
    }, 2000);
};

function workout() {
    doPushups(() => {
        doSitups(() => {
            doJumpingJacks(() => {
                clearInterval(interval);
            });
        });
    });
}
