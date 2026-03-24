# VikramT.com Redesign Plan

## Goal

Build an interactive, skills-first personal site that helps recruiters and hiring managers quickly understand:

- what Vikram is strongest at
- what business and technical problems he has solved
- which skills are proven by real work
- how to contact him or download a traditional resume

The new site should feel more like a concise product profile than a static resume page.

## Problems With the Current Site

- The page reads like a document, not an experience.
- Skills are presented as a flat list with no context or proof.
- Strong achievements are buried inside long role descriptions.
- There is no filtering, exploration, or visual hierarchy.
- It is hard to tell the primary professional narrative in under 20 seconds.

## Target Outcome

When someone lands on the site, they should be able to answer these questions quickly:

1. Who is Vikram professionally?
2. What are his strongest skills?
3. What kinds of systems, products, and business problems has he worked on?
4. What evidence supports those skills?
5. How can I contact him or get the full resume?

## Recommended Positioning

Primary positioning:

Product-minded software engineer and technical analyst with experience across backend systems, platform analysis, automation, security/compliance, and data-driven product operations.

Possible headline options:

- Software Engineer and Technical Analyst building reliable product systems
- Backend and Product Systems Engineer with a strong technical analysis lens
- Technical Analyst and Software Engineer focused on automation, platform quality, and business impact

## Recommended Information Architecture

### 1. Hero

Purpose:
Create immediate clarity.

Contents:

- clear headline
- 1 to 2 sentence value proposition
- quick stat strip
- primary CTAs: `Explore Skills`, `Download Resume`, `Contact`

Suggested stat ideas:

- years of experience
- countries worked in
- domains touched: SaaS, education, health, CRM, platform ops
- core strengths: backend, analytics, automation, security

### 2. Skills Dashboard

Purpose:
Turn the weak flat skills list into the main differentiator.

Structure:

- skill categories
- clickable skills
- evidence count per skill
- linked jobs/projects/outcomes

Suggested categories:

- Backend Engineering
- Data and Analytics
- Cloud and DevOps
- Product and Technical Analysis
- Security and Compliance
- Collaboration and Leadership

Each skill detail should show:

- confidence level or strength label
- where it was used
- related achievements
- tools and technologies

### 3. Experience Timeline

Purpose:
Show progression and credibility.

Each role card should include:

- company, title, dates, location
- 2 to 4 concise impact bullets
- tags for skills used
- expandable "What I worked on" detail

Experience bullets should follow:

problem -> action -> outcome

### 4. Selected Work / Case Studies

Purpose:
Provide proof beyond titles.

Candidate case studies from current resume:

- Dependabot to Jira vulnerability workflow
- Node.js to Go migration
- AWS Lambda monitoring tool
- SQL-based platform utilization analysis
- API crash analysis dashboard
- ISO 27001 / ISMS contribution

Each case study should include:

- context
- challenge
- approach
- tools
- outcome
- related skills

### 5. Resume / Contact

Purpose:
Support quick recruiter conversion.

Include:

- downloadable latest resume
- email
- LinkedIn
- GitHub
- location
- optional short note about open roles / interests

## Recommended Interactions

High-value interactions:

- click a skill to highlight connected roles and case studies
- filter experience by category such as `Backend`, `Security`, `Analytics`, `Leadership`
- expand case studies inline without leaving the page
- sticky section navigation for fast scanning
- mobile-friendly card navigation

Optional interactions:

- recruiter mode toggle for a short version
- mini timeline scrubber
- animated skill graph or relationship map

## Content Model

To keep the site maintainable, content should be data-driven.

Recommended content collections:

### `profile`

- name
- headline
- summary
- location
- links
- stats

### `skills`

- id
- name
- category
- level
- years
- description
- relatedRoles
- relatedProjects

### `experience`

- company
- role
- startDate
- endDate
- location
- summary
- highlights
- skills

### `projects` or `caseStudies`

- title
- slug
- summary
- challenge
- solution
- impact
- tools
- relatedSkills
- relatedRole

## Suggested Tech Stack

Best-fit stack for this site if hosting on GitHub Pages:

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion for lightweight interaction
- content in JSON, YAML, or MDX
- static export deployment

Why this stack:

- easy deployment
- good SEO
- flexible interactive UI
- maintainable content structure
- simple future updates

GitHub Pages note:

- the site should be built as a static site
- avoid server-only features and runtime APIs
- prefer prebuilt content and client-side interactions

## Visual Direction

The site should avoid generic developer portfolio patterns.

Design goals:

- strong hierarchy
- editorial feel
- intentional color system
- modern but professional
- subtle motion, not gimmicks

Suggested design language:

- warm off-white or light stone background
- dark ink text
- one strong accent such as rust, teal, or deep blue
- modular card layout
- expressive serif or humanist display paired with a clean sans-serif

## Build Phases

### Phase 1: Strategy and Content

- finalize headline and positioning
- rewrite resume bullets into website-friendly copy
- categorize skills
- select 4 to 6 case studies

### Phase 2: Structure and Data

- create site map
- define content schema
- add structured data files for profile, skills, experience, and case studies

### Phase 3: UI Implementation

- build landing page sections
- implement skills dashboard
- build timeline and case study cards
- add responsive styling and motion

### Phase 4: Polish

- tighten copy
- improve SEO and metadata
- optimize mobile UX
- add resume download and contact conversion elements

## Immediate Next Step

The best next move is to prepare the content architecture before building UI.

That means:

1. finalize the personal positioning statement
2. group skills into categories
3. rewrite experience into shorter impact-oriented website copy
4. choose the case studies that deserve spotlight treatment

Once that is done, the UI can be built quickly and cleanly.
