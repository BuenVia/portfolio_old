function navOpen() {
    let nav = document.getElementById('navhead');
    if (nav.className === 'header') {
        nav.className += ' change';
    } else {
        nav.className = 'header';
    }
}

let pModal = document.getElementById('portfolioMod');
let pBtn = document.getElementById('portfolioBtn');
let conModal = document.getElementById('contactMod');
let conBtn = document.getElementById('contactBtn');
let portClose = document.getElementsByClassName('portClose')[0];
let conClose = document.getElementsByClassName('conClose')[0];

pBtn.onclick = function() {
    pModal.style.display = "block";
}
conBtn.onclick = function() {
    conModal.style.display = "block"
}
portClose.onclick = function() {
    pModal.style.display = "none";
    conModal.style.display = "none";
}
conClose.onclick = function() {
    conModal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == pModal || event.target == conModal) {
        pModal.style.display = "none";
        conModal.style.display = "none";
    }
}
