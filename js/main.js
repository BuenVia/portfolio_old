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
    if(event.target == pModal || event.target == conModal) {
        pModal.style.display = "none";
        conModal.style.display = "none";
    }
}
