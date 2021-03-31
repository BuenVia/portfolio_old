// Function for opening Navbar (Hamburger element)
function navOpen() {
    let nav = document.getElementById('navhead');
    if (nav.className === 'header') {
        nav.className += ' change';
    } else {
        nav.className = 'header';
    }
}

// Portfolio modal
let pModal = document.getElementById('portfolioMod');
let pBtn = document.getElementById('portfolioBtn');
let portClose = document.getElementsByClassName('portClose')[0];

pBtn.onclick = function() {
    pModal.style.display = "block";
}
portClose.onclick = function() {
    pModal.style.display = "none";
}

// CV Modal
let cvModal = document.getElementById('cvMod');
let cvBtn = document.getElementById('cvOpenBtn');
let cvClose = document.getElementsByClassName('cvClose')[0];

cvBtn.onclick = function() {
    cvModal.style.display = "block";
}
cvClose.onclick = function() {
    cvModal.style.display = "none";
}

// Contact form modal (sidebar)
let conModal = document.getElementById('contactMod');
let conBtn = document.getElementById('contactBtn');
let conClose = document.getElementsByClassName('conClose')[0];

conBtn.onclick = function() {
    conModal.style.display = "block"
}
conClose.onclick = function() {
    conModal.style.display = "none";
}

// Closing all modals
window.onclick = function(event) {
    if(event.target == pModal || event.target == conModal || event.target == cvModal) {
        pModal.style.display = "none";
        conModal.style.display = "none";
        cvModal.style.display = "none";
    }
}
