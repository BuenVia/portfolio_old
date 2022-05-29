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

// About Modal
let abtModal = document.getElementById('abtMod');
let abtBtn = document.getElementById('abtBtn');
let abtClose = document.getElementsByClassName('abtClose')[0];

abtBtn.onclick = function() {
    abtModal.style.display = "block";
}
abtClose.onclick = function() {
    abtModal.style.display = "none";
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

// Contact form modal
let conModal = document.getElementById('contactMod');
let conBtn = document.getElementById('contactBtn');
let conClose = document.getElementsByClassName('conClose')[0];

conBtn.onclick = function() {
    conModal.style.display = "block"
}
conClose.onclick = function() {
    conModal.style.display = "none";
}

// Resources modal 
let resModal = document.getElementById('resourcesMod');
let resBtn = document.getElementById('resourcesBtn');
let resClose = document.getElementsByClassName('resourcesClose')[0];

resBtn.onclick = function() {
    resModal.style.display = "block"
}
resClose.onclick = function() {
    resModal.style.display = "none";
}

// Closing all modals
window.onclick = function(event) {
    if(event.target == pModal || event.target == abtModal || event.target == conModal || event.target == cvModal || event.target == resModal) {
        pModal.style.display = "none";
        abtModal.style.display = "none";
        conModal.style.display = "none";
        cvModal.style.display = "none";
        resModal.style.display = "none";
    }
}

// Contact mail success message
let success = document.URL.indexOf('?commentsubmit=success');
let fail = document.URL.indexOf('?commentsubmit=fail');
if(success >= 0) {

    let el = document.getElementById('main');
    el.innerHTML = el.innerHTML+"<div class='success'><p>Thank you for your message. I will respond within 48 hours.</p></div>";

} else if(fail >= 0) {

    let el = document.getElementById('main');
    el.innerHTML = el.innerHTML+"<div class='fail'><p>Unfortunately it was not possible to send your email.</p><p>Please email matt@buenvia.com for assistance.</p></div><br>";

}

