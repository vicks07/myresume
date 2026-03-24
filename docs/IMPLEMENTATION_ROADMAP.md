# Implementation Roadmap

## Recommended Build Order

Hosting target:

- GitHub Pages
- static site deployment only

### Step 1: Content Preparation

Deliverables:

- final headline
- short summary paragraph
- categorized skills list
- rewritten experience highlights
- selected case studies
- latest resume file ready for download

Why first:
The design and interactions will be much better if they are built on clear content, not placeholder text.

### Step 2: App Scaffold

Recommended structure:

- `app/`
- `components/`
- `content/`
- `public/`
- `styles/`

Suggested content files:

- `content/profile.json`
- `content/skills.json`
- `content/experience.json`
- `content/case-studies.json`

Static-hosting notes:

- use static generation only
- keep data local in the repo
- avoid server routes and server actions
- configure asset paths correctly for GitHub Pages

### Step 3: Core Components

Build these first:

- `Hero`
- `SkillsDashboard`
- `ExperienceTimeline`
- `CaseStudyGrid`
- `ContactSection`
- `SectionNav`

### Step 4: Interaction Layer

Add:

- skill filters
- active tag highlighting
- expandable detail cards
- smooth section navigation

### Step 5: Polish and Launch Prep

Add:

- SEO metadata
- Open Graph image
- resume download
- responsive refinements
- analytics if wanted

## MVP Scope

If we want a fast first version, the MVP should include:

- strong hero
- categorized interactive skills section
- redesigned experience timeline
- 3 featured case studies
- resume download and contact links

This is enough to meaningfully outperform the current site.

## Nice-To-Have Scope

Later additions:

- recruiter mode toggle
- animated skill graph
- detailed project pages
- writing/blog section
- testimonials or references

## Success Criteria

The redesign is successful if:

- a visitor can understand the profile in under 20 seconds
- skills feel credible because they are linked to evidence
- the site looks distinct from a generic resume page
- mobile users can navigate it easily
- updating the content is simple

## Recommendation

Start with content-first implementation, then build the UI in code.

That gives the smoothest path:

1. finalize content
2. scaffold a static-export app
3. implement the homepage
4. refine interaction and polish
