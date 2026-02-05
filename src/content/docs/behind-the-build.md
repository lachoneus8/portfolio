---
title: Behind the Build
description: How this portfolio was built and the technology choices behind it
---

# Behind the Build

This page documents the architecture, design choices, and development workflow for this portfolio site itself—a demonstration of intentional technology selection and AI-assisted development.

## Technology Stack

### Framework: Astro with Starlight

I chose Astro with the Starlight theme for several key reasons:

- **Performance**: Static site generation means fast loading times and excellent SEO
- **Content-First**: MDX support allows writing content in Markdown with embedded components
- **GitHub Pages Compatible**: Deploys easily as a static site with no server requirements
- **Professional Documentation Aesthetic**: Starlight provides a clean, modern look that fits a technical portfolio

### Styling & Design System

- **Color Palette**: Navy blue (hue 220°) as the primary color with amber/gold (hue 40°) accents for a professional, trustworthy aesthetic with warmth
- **Typography**: Inter font family at 1.25 modular scale for excellent readability across devices
- **Component Library**: Custom Card, Button, and Link components built to be reusable and accessible
- **Responsive Design**: Mobile-first approach with consistent breakpoints (640px, 768px, 1024px, 1280px)

### Deployment

- **Hosting**: GitHub Pages with automated deployment
- **CI/CD**: GitHub Actions workflow that builds and deploys on every push to main
- **No Server Required**: Completely static output keeps infrastructure simple and costs at zero

## AI-Assisted Development Workflow

### Tools Used

This portfolio was built using **GitHub Copilot with Claude Sonnet 4.5**, demonstrating the same AI-assisted workflow I use in my professional and personal work.

### Human-Directed Architecture

While AI tools provided significant assistance, all architectural decisions remained human-directed:

- **Framework Selection**: I evaluated Astro vs Next.js vs plain static sites, or more hosted scenarios like Wix which doesn't leave as much room for direct code contributions
- **Design System**: Color choices, typography, and component structure were intentional decisions
- **Content Strategy**: The narrative-driven case study approach to projects
- **Information Architecture**: How to organize and present projects, experience, and technical details

### Where AI Accelerated Development

AI tools dramatically increased productivity in:

1. **Boilerplate Generation**: Setting up Astro config, component templates, and styling foundations
2. **Component Scaffolding**: Creating reusable Card, Button, and Link components with proper TypeScript types
3. **CSS Utilities**: Building out spacing system and responsive utilities
4. **Documentation**: Drafting initial content based on resume information
5. **Refactoring**: Cleaning up code and ensuring consistency across components

## Future Enhancements

Planned improvements documented in the project checklist:

- Interactive Unity WebGL demos
- Project filtering/tagging system

## Takeaway

This portfolio demonstrates that AI tools are powerful accelerators when paired with clear human direction. The key is knowing when to leverage AI (implementation, boilerplate, refactoring) and when to rely on human judgment (architecture, design, content strategy).

**View the code**: This entire portfolio is open source on [GitHub](https://github.com/lachoneus8/portfolio).
