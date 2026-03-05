# 🚀 AI Developer Portfolio — Next.js

A fully animated portfolio for an Agentic AI Developer built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles + animations
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx         # Fixed nav with smooth scroll + active tracking
│   ├── Hero.tsx           # Typewriter hero + animated code card
│   ├── About.tsx          # Bio + timeline journey
│   ├── Skills.tsx         # Progress bars + radar chart
│   ├── Projects.tsx       # 6 real projects + animated glow borders
│   ├── Certifications.tsx # 6 certs with verified badges
│   ├── Testimonials.tsx   # Client reviews + auto-rotate
│   ├── Blog.tsx           # 4 articles
│   └── Contact.tsx        # Contact form + social links
├── data/
│   ├── projects.ts        # All 6 real projects data
│   └── skills.ts          # Skills, radar, tech stack, chart data
├── lib/
│   └── utils.ts           # cn() helper
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## ⚙️ Setup & Run

### 1. Install dependencies

```bash
npm install
```

### 2. Run dev server

```bash
npm run dev
```

### 3. Open browser

```
http://localhost:3000
```

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — animations
- **Recharts** — charts & graphs
- **Lucide React** — icons

## ✏️ Customize

- Update your info in `data/projects.ts` and `data/skills.ts`
- Replace dummy contact links in `components/Contact.tsx`
- Add your real name in `components/Navbar.tsx`
- Update metadata in `app/layout.tsx`
