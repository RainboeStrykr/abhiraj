# abhiraj.dev — Personal Portfolio & Blog

> Personal portfolio, blog, and project showcase for Abhiraj

## ✨ About

This is the source code for my personal website. It includes:

- **Home** — A brief intro about me
- **Blog** — Markdown-powered blog posts
- **Projects** — Showcase of side projects with descriptions, tech stacks, and demos

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org/) v16 (Turbopack) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v3 + SASS |
| Content | Markdown via [gray-matter](https://github.com/jonschlinkert/gray-matter) + [remark](https://github.com/remarkjs/remark) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) (Light / Dark / System) |
| SEO | [next-seo](https://github.com/garmeeh/next-seo) |
| Syntax Highlighting | [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus) |
| Analytics | [Vercel Analytics](https://vercel.com/analytics) |

## 🗂 Project Structure

```
/
├── pages/              # Next.js pages (index, blog, projects)
├── components/         # Reusable UI components
├── layouts/            # Page layout wrappers
├── data/
│   ├── blog/           # Blog posts as Markdown files
│   └── projects/       # Project entries as Markdown files
├── public/             # Static assets (images, favicons, project files)
├── styles/             # Global CSS / SASS styles
├── lib/                # Markdown parsing utilities
└── next.config.js      # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Adding Content

### Blog Posts

Create a new `.md` file in `data/blog/` with frontmatter:

```markdown
---
date: 2025-01-01 12:00:00 +0530
title: "My Post Title"
slug: my-post-title
---

Post content here...
```

### Projects

Create a new `.md` file in `data/projects/` with frontmatter:

```markdown
---
date: 2025-01-01 12:00:00 +0530
title: "Project Name"
slug: project-name
web: "https://yourproject.com"
tech: ["React", "TypeScript", "Next.js"]
icon: "https://link-to-icon.png"
---

Project description here...
```

> Static assets like screenshots and GIFs go in `public/project-files/` and are referenced as `/project-files/filename.gif`.

## 📄 License

This project is open source. Feel free to fork and adapt it for your own portfolio.
