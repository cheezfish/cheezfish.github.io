const themeToggle = document.getElementById('themeToggle');

// Toggle between dark mode and light mode
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

// Function to initialize dark mode based on local storage
const initializeDarkMode = () => {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (darkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
};

// Initialize dark mode
initializeDarkMode();
