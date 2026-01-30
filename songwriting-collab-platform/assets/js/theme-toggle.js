/**
 * Theme Toggle Functionality
 * Handles Light/Dark mode switching and persistence
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const iconMoon = '<i class="bi bi-moon-stars-fill"></i>'; // Bootstrap Icon
    const iconSun = '<i class="bi bi-sun-fill"></i>';

    // Check localStorage
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply Theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
            htmlElement.classList.add('dark'); // Sometimes needed for Bootstrap or Tailwind
            if (themeToggleBtn) themeToggleBtn.innerHTML = iconSun;
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            htmlElement.classList.remove('dark');
            if (themeToggleBtn) themeToggleBtn.innerHTML = iconMoon;
        }
        localStorage.setItem('theme', theme);
    }

    // Initialize
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (systemPrefersDark) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }

    // Toggle Event
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }
});
