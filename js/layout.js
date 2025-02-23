// Layout components handler
class Layout {
  static async init() {
    const header = `
      <header class="header">
        <nav class="nav container">
            <!-- Logo + Name -->
            <a href="/" class="logo-link">
                <div class="logo-icon">
                    <i class="fas fa-chart-line"></i>
                </div>
                <span class="logo-text">Dr. Jamie I. Forrest</span>
            </a>

            <!-- Desktop Navigation -->
            <div class="nav-links">
                <a href="https://more-blog.drjforrest.com" class="nav-link" target="_blank" rel="noopener noreferrer">
                    <div class="nav-link-icon">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <span>Standard Blog</span>
                </a>
                <a href="/african-digital-development" class="nav-link">
                    <div class="nav-link-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <span>Featured Series</span>
                </a>
                <a href="https://more-blog.drjforrest.com/presentations" class="nav-link" target="_blank" rel="noopener noreferrer">
                    <div class="nav-link-icon">
                        <i class="fas fa-presentation"></i>
                    </div>
                    <span>Presentations</span>
                </a>
                <button class="theme-toggle">
                    <i class="fas fa-sun sun-icon"></i>
                    <i class="fas fa-moon moon-icon"></i>
                </button>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md-hidden">
                <button class="theme-toggle">
                    <i class="fas fa-sun sun-icon"></i>
                    <i class="fas fa-moon moon-icon"></i>
                </button>
                <button class="mobile-menu-button">
                    <i class="fas fa-bars menu-icon"></i>
                    <i class="fas fa-times close-icon" style="display: none;"></i>
                </button>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <div class="mobile-menu">
            <div class="mobile-nav-links">
                <a href="https://more-blog.drjforrest.com" class="mobile-nav-link" target="_blank" rel="noopener noreferrer">
                    <div class="mobile-nav-icon">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <span>Standard Blog</span>
                </a>
                <a href="/african-digital-development" class="mobile-nav-link">
                    <div class="mobile-nav-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <span>Featured Series</span>
                </a>
                <a href="https://more-blog.drjforrest.com/presentations" class="mobile-nav-link" target="_blank" rel="noopener noreferrer">
                    <div class="mobile-nav-icon">
                        <i class="fas fa-presentation"></i>
                    </div>
                    <span>Presentations</span>
                </a>
            </div>
        </div>
    </header>
    `;

    const footer = `
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-grid">
                <!-- Branding Section -->
                <div class="footer-brand">
                    <a href="/" class="brand-link">
                        <div class="brand-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <span class="brand-text">Dr. Jamie I. Forrest</span>
                    </a>
                </div>
                
                <!-- Links Section -->
                <div class="footer-links">
                    <div class="footer-section">
                        <h3>Navigation</h3>
                        <ul class="footer-nav-list">
                            <li><a href="https://drjforrest.com" class="footer-nav-link">Main Site</a></li>
                            <li><a href="https://more-blog.drjforrest.com" class="footer-nav-link">Standard Blog</a></li>
                            <li><a href="https://more-blog.drjforrest.com/presentations" class="footer-nav-link">Presentations</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Series</h3>
                        <ul class="footer-nav-list">
                            <li><a href="/african-digital-development" class="footer-nav-link">African Digital Development</a></li>
                            <li><a href="/bonus" class="footer-nav-link">Interactive Dashboards</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- Copyright Section -->
            <div class="copyright">
                <a href="https://drjforrest.com" class="copyright-link" target="_blank" rel="noopener noreferrer">
                    © Jamie I Forrest @ 2024
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </footer>
    `;

    // Insert header
    const headerPlaceholder = document.querySelector('#header-placeholder');
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = header;
    }

    // Insert footer
    const footerPlaceholder = document.querySelector('#footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = footer;
    }
  }
}

// Initialize layout when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  Layout.init();
});