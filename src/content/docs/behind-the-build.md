---
title: Behind the Build
description: How this portfolio was built and the technology choices behind it
---

# Behind the Build

This page documents the architecture, design choices, and development workflow for this portfolio site itself—a demonstration of intentional technology selection and AI-assisted development.

**The core portfolio was built in a single day.** Foundation, component system, navigation, and initial case studies completed in one intensive session using GitHub Copilot with Claude Sonnet 4.5.

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

### Build Timeline

- **Morning**: Framework setup, design system, component architecture
- **Afternoon**: Navigation, routing, responsive design, deployment pipeline
- **Evening**: Initial content, case studies, polishing

Subsequent days focused on content refinement, additional case studies, and image integration.

### Tools Used

This portfolio was built using **GitHub Copilot with Claude Sonnet 4.5**, demonstrating the same AI-assisted workflow I use in my professional and personal work.

### Human-Directed Architecture

While AI tools provided significant assistance, all architectural decisions remained human-directed:

- **Framework Selection**: I evaluated Astro vs Next.js vs plain static sites, and considered hosted scenarios like Wix that don't leave as much room for direct code contributions
- **Design System**: Color choices, typography, and component structure were intentional decisions
- **Content Strategy**: The narrative-driven case study approach to projects
- **Information Architecture**: How to organize and present projects, experience, and technical details

### Where AI Accelerated Development

AI tools significantly increased productivity:

1. **Boilerplate Generation**: Astro config, component templates, styling foundations
2. **Component Scaffolding**: Reusable components with proper TypeScript types
3. **CSS Utilities**: Spacing system and responsive utilities
4. **Documentation**: Initial content structure based on resume
5. **Refactoring**: Code cleanup and consistency across components
6. **Problem Solving**: Debugging layout issues, deployment configs, MDX integration

## Future Enhancements

Planned improvements documented in the project checklist:

- Interactive Unity WebGL demos
- Project filtering/tagging system

## Takeaway

This portfolio demonstrates how AI tools accelerate development when paired with clear human direction. The key is knowing when to leverage AI (implementation, boilerplate, debugging) and when to rely on human expertise (architecture, design, content strategy).

**What shipped in 24 hours:**
- Complete component system with responsive design
- Navigation, routing, and deployment pipeline
- Three detailed case studies with images
- Professional design system
- Accessible, performant code

**View the code**: This entire portfolio is open source on [GitHub](https://github.com/lachoneus8/portfolio).
