document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update button icon
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    sunIcon.style.display = isDark ? 'block' : 'none';
    moonIcon.style.display = isDark ? 'none' : 'block';
  }

  // Initialize theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme === 'dark');
  } else {
    setTheme(prefersDark.matches);
  }

  // Handle theme toggle click
  themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme !== 'dark');
  });

  // Handle system theme changes
  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches);
    }
  });
});