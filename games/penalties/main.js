// ELEMENTS
const gk = document.querySelector('.goalkeeper');
const fb = document.querySelector('.football');
const score0 = document.querySelector('#score-0');
const score1 = document.querySelector('#score-1');
const kicks0 = document.querySelector('#kicks-0');
const kicks1 = document.querySelector('#kicks-1');
const btnLeft = document.querySelector('.btn-left');
const btnCenter = document.querySelector('.btn-center');
const btnRight = document.querySelector('.btn-right');
const btnNext = document.querySelector('.btn-next');
const btnNew = document.querySelector('.btn-new');

// STARTING CONDITIONS
p1Score = 0;
cpuScore = 0;
kicksTaken0 = 0;
kicksTaken1 = 0;

const show = function() {
    if(kicksTaken0 !== kicksTaken1) {
        document.querySelector('.control-pl1').style = "display: none;";
    } else {
        document.querySelector('.control-cpu').style = "display: none;";
    }
}

// SCORING
btnLeft.addEventListener('click', function() {
    const ply1 = 0;
    const cpu = Math.trunc(Math.random() * 3);
    console.log(ply1, cpu, kicksTaken0);
    
    if (kicksTaken0 <= 4) {
        if (ply1 !== cpu) {
            console.log('P1 scores');
            p1Score += 1;
            score0.textContent = p1Score;
            kicksTaken0 += 1;
            kicks0.textContent = kicksTaken0;
        } else {
            console.log('CPU Saves');
            kicksTaken0 += 1;
            kicks0.textContent = kicksTaken0;
        }
    }  else {
        document.querySelector('.control').style = "display: none;";
    }
})

btnCenter.addEventListener('click', function() {
    const ply1 = 1;
    const cpu = Math.trunc(Math.random() * 3);
    console.log(ply1, cpu, kicksTaken0);
    
    if (kicksTaken0 <= 4) {
        if (ply1 !== cpu) {
            console.log('P1 scores');
            p1Score += 1;
            score0.textContent = p1Score;
            kicksTaken0 += 1;
            kicks0.textContent = kicksTaken0;
        } else {
            console.log('CPU Saves');
            kicksTaken0 += 1;
            kicks0.textContent = kicksTaken0;
        }
    }  else {
        document.querySelector('.control').style = "display: none;";
    }
})

btnRight.addEventListener('click', function() {
    const ply1 = 2;
    const cpu = Math.trunc(Math.random() * 3);
    console.log(ply1, cpu, kicksTaken0);
    
    if (kicksTaken0 <= 4) {
        if (ply1 !== cpu) {
            console.log('P1 scores');
            p1Score += 1;
            score0.textContent = p1Score;
            kicksTaken0 += 1;
            kicks0.textContent = kicksTaken0;
        } else {
            console.log('CPU Saves');
            kicksTaken0 += 1;
            kicks0.textContent = kicksTaken0;
        }
    }  else {
        document.querySelector('.control').style = "display: none;";
    }
})

btnNext.addEventListener('click', function() {
    const cpuKick = Math.trunc(Math.random() *2);
    const pl1Save = Math.trunc(Math.random() *2);

    if (kicksTaken1 <= 4) {
        if (cpuKick !== pl1Save) {
            console.log('CPU scores');
            cpuScore += 1;
            score1.textContent = cpuScore;
            kicksTaken1 += 1;
            kicks1.textContent = kicksTaken1;
        } else {
            console.log('CPU Saves');
            kicksTaken1 += 1;
            kicks1.textContent = kicksTaken1;
        }
    }
})