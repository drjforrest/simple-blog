# Simple Blog Platform

A lightweight, static blog platform designed to complement my main Next.js blog site. This platform provides a streamlined solution for quick content publication while maintaining consistent styling and user experience with the main site.

## Overview

This platform serves as a rapid content deployment solution, addressing the sometimes arduous process of publishing through the main Next.js framework. It integrates with Vercel through CI/CD hooks, enabling swift content generation and deployment while maintaining links to the main blog at blog.drjforrest.com.

### Key Features

- Static HTML/CSS/JS implementation for fast loading and simple maintenance
- Consistent styling with the main Next.js site
- Dark/light theme support
- Responsive design for all devices
- Integrated Marp presentation support
- Simple content deployment process

## Directory Structure

```
simple-blog/
├── css/
│   ├── variables.css      # Theme variables and colors
│   ├── globals.css        # Global styles
│   ├── navigation.css     # Header and navigation styles
│   ├── footer.css        # Footer styles
│   ├── post.css          # Blog post styles
│   └── presentation.css  # Presentation styles
├── js/
│   ├── navigation.js     # Navigation behavior
│   ├── theme.js         # Theme switching
│   └── layout.js        # Layout components
├── marps/
│   └── styles/          # Marp presentation themes
├── posts/               # Blog post content
└── templates/           # HTML templates
```

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Content Creation

### Blog Posts
1. Create a new post using the `post.html` template
2. Add your content in markdown or HTML format
3. Deploy through the standard CI/CD pipeline

### Presentations
1. Create Marp markdown files in the `marps` directory
2. Use the provided theme:
   ```markdown
   ---
   marp: true
   theme: blog-theme
   ---
   ```
3. Generate HTML:
   ```bash
   marp your-presentation.md --theme ./marps/styles/theme.css
   ```
4. Access via: `/presentation.html?presentation=/marps/your-presentation.html`

## Deployment

The platform automatically deploys to Vercel through CI/CD hooks when changes are pushed to the main branch. The deployment process includes:

1. Content validation
2. Asset optimization
3. Automatic deployment to Vercel
4. Integration with the main blog site

## Security

- Client interface maintained in a separate repository for enhanced security
- Sensitive operations handled through secure API endpoints
- Environment variables managed through Vercel's secure environment

## License

© Jamie I Forrest @ 2024. All rights reserved.

## Contributing

While this is primarily a personal blog platform, issues and pull requests are welcome. Please ensure you follow the existing code style and include appropriate tests.

## Contact

For any questions or concerns, please reach out through [my website](https://drjforrest.com).