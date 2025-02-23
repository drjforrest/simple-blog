// Navigation scroll behavior
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');

  // Handle scroll
  function handleScroll() {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Initial check
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Mobile menu toggle
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('active');
    menuIcon.style.display = isMenuOpen ? 'none' : 'block';
    closeIcon.style.display = isMenuOpen ? 'block' : 'none';
  }

  mobileMenuButton?.addEventListener('click', toggleMenu);

  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    const isClickInside = mobileMenuButton?.contains(event.target) || mobileMenu?.contains(event.target);
    if (!isClickInside && isMenuOpen) {
      toggleMenu();
    }
  });
});