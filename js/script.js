document.addEventListener('DOMContentLoaded', function () {
    // Date update
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

    // Replay buttons
    const iframes = Array.from(document.querySelectorAll('.div'));
    const replayButtons = document.querySelectorAll('.load');

    replayButtons.forEach(button => {
        button.addEventListener('click', function () {
            const index = this.dataset.index;
            iframes[index].src = iframes[index].src;
        });
    });

    const themeToggle = document.getElementById('checkbox');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'light-mode') {
            themeToggle.checked = true;
        } else {
            themeToggle.checked = false;
        }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        body.classList.add('light-mode');
        themeToggle.checked = true;
    } else {
        body.classList.add('dark-mode');
        themeToggle.checked = false;
    }


    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    const elementsToRepaint = document.querySelectorAll('.ad-unit-container, .header');

    elementsToRepaint.forEach(element => {
        const originalDisplay = element.style.display;
        element.style.display = 'none';
        element.offsetHeight;
        element.style.display = originalDisplay;
    });
});