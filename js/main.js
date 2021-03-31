function openCv() {
    let cv = document.getElementById('summary');

    if (cv.className === 'sidebar') {
        cv.className += ' change';
    } else {
        cv.className = 'sidebar';
    }
}