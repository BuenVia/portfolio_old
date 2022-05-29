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
        btnLeft.style = "display: none;";
    }
})

// GOALKEEPING
btnCenter.addEventListener('click', function() {
    const ply1 = 0;
    const cpu = Math.trunc(Math.random() * 3);
    console.log(ply1, cpu, kicksTaken1);

    if (kicksTaken1 <= 4) {
        if (ply1 !== cpu) {
            console.log('CPU scores');
            cpuScore += 1;
            score1.textContent = cpuScore;
            kicksTaken1 += 1;
            kicks1.textContent = kicksTaken1;
        } else {
            console.log('P1 Saves');
            kicksTaken1 += 1;
            kicks1.textContent = kicksTaken1;
        }
    } else {
        btnCenter.style = "display: none;";
    }
})