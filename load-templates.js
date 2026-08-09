function loadHTML(elementId, filePath) {
    return fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', () => {
    Promise.all([
        loadHTML('header', 'header.html'),
        loadHTML('navbar', 'navbar.html'),
        loadHTML('footer', 'footer.html')
    ]).then(() => {
        // Only settle the scroll position once the dynamic content is in place,
        // otherwise the injected header/navbar shift whatever we scrolled to.
        const target = location.hash && document.getElementById(location.hash.slice(1));
        if (target) {
            target.scrollIntoView();
        } else {
            window.scrollTo(0, 0);
        }
    });
});
