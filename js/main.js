function navOpen() {
    let nav = document.getElementById('navhead');
    if (nav.className === 'header') {
        nav.className += ' change';
    } else {
        nav.className = 'header';
    }
}