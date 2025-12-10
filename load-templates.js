function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (elementId === 'footer') {
                // Ensure we scroll to top after loading all dynamic content
                window.scrollTo(0, 0);
            }
        });
}

document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);  // Ensure scroll to top on page load
    loadHTML('header', 'header.html');
    loadHTML('navbar', 'navbar.html');
    loadHTML('footer', 'footer.html');
});