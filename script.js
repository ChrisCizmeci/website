document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    // Check for saved theme and apply it on page load
    if (localStorage.getItem('theme') === 'dark-mode') {
        body.classList.add('dark-mode');
    }

    // Toggle theme on button click
    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Save the new theme preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });

    // NEW: Logic for toggling the logo name
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents the link from jumping to the top of the page
        logo.classList.toggle('toggled');
    });
});
