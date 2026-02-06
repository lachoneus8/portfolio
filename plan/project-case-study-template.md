# Project Case Study Template

Use this template structure for creating detailed project case studies in `src/content/docs/projects/`.

---

## File Header (Frontmatter)
```yaml
---
title: [Project Name]
description: [One-sentence project description]
---

import projectHero from '../../../assets/projects/[project-name]-hero.jpg';
```

## Structure

### 1. Hero Section
- **Project Name** (H1)
- **Hero Image** (prominently displayed after title, before tagline)
  ```jsx
  <div style="width: 100%; max-width: 1200px; height: 400px; border-radius: 0.5rem; overflow: hidden; margin: 2rem 0;">
    <img src={projectHero.src} alt="[Descriptive alt text]" style="width: 100%; height: 100%; object-fit: cover;" />
  </div>
  ```
- **Tagline/Overview** (1-2 sentences capturing what it is)
- **Quick Facts Box:**
  - Role: [Your title/role]
  - Company: [Organization]
  - Timeline: [Date range]
  - Status: [Shipped/In Development/Live]
  - Platform(s): [iOS, Xbox, Quest, etc.]
  - Technologies: [Unity, C#, Azure, etc.]

### 2. The Challenge
**Format:** 2-3 paragraphs

Answer:
- What problem needed solving?
- What constraints existed? (technical, user, business)
- Why was this hard?
- What was at stake?

**Tone:** Set up the story - this is what made the project interesting/difficult

### 3. My Role & Contributions
**Format:** Clear bullet points or short paragraphs

Specific things YOU did:
- Architecture decisions you made
- Systems you designed
- Code you wrote
- Teams you led
- Problems you personally solved

**Avoid vague language** - use concrete examples and numbers where possible.

### 4. Technical Approach
**Format:** 2-4 paragraphs, potentially with code snippets or diagrams

Explain HOW you solved it:
- Key technical decisions
- Architecture choices
- Tools and technologies selected
- Trade-offs considered
- Integration challenges

**Include specific details** - this demonstrates depth of knowledge

### 5. Results & Impact
**Format:** Bullet points with metrics

Quantifiable outcomes:
- User numbers (millions of users, X% growth)
- Performance improvements (40% faster load times)
- Business impact (shipped on time, enabled new features)
- Team impact (reduced iteration time, improved workflow)

**Use numbers whenever possible** - they're more credible than adjectives

### 6. Lessons Learned
**Format:** 2-3 short paragraphs or bullets

Honest reflection:
- What worked well?
- What would you do differently?
- What did you learn about the technology?
- What did you learn about team dynamics?
- How did this change your approach to future work?

**Be authentic** - showing growth and self-awareness is valuable

### 7. Visuals
Throughout the case study, include:
- Screenshots of the shipped product
- Architecture diagrams
- Before/after comparisons
- UI mockups or flow diagrams
- Team photos or event photos (if relevant)

**Place images near relevant text** - don't dump them all at the end

### 8. Optional Sections (as needed)
- **Cross-team Collaboration:** If coordination was a major part
- **Performance Optimization:** If this was a key focus area
- **User Research:** If user feedback drove decisions
- **Technical Deep Dive:** If there's a particularly interesting technical detail worth expanding

---

## Example Quick Facts Box Format

```markdown
<div style="border-left: 3px solid var(--sl-color-accent); padding: 1rem; background: var(--sl-color-bg-nav); margin: 2rem 0;">

**Role:** Principal Software Engineer  
**Company:** Meta  
**Timeline:** 2021-2024  
**Status:** Live (1B+ users)  
**Platforms:** iOS, Android, Quest VR  
**Tech Stack:** Unity, C#, Azure, Python

</div>
```

---

## Writing Tips

1. **Start with impact** - Lead with what users/business got from this
2. **Show, don't tell** - Use specific examples rather than generic claims
3. **Include failures** - Problems you hit make the story more real
4. **Keep it scannable** - Use headers, bullets, short paragraphs
5. **Match tone to audience** - Professional but conversational (indie game dev voice)
6. **Link to live work** - If the project is public, include links

---

## File Naming Convention

`src/content/docs/projects/[project-slug].mdx`

**Use .mdx extension** (not .md) to support image imports and Astro component usage.

Examples:
- `xbox-avatars.mdx`
- `meta-avatars.mdx`
- `minecraft-realms-plus.mdx`

Keep slugs short, lowercase, hyphenated.
