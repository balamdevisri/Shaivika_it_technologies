# Shaivika IT Technologies — Premium Website Redesign

> Production-grade React & TypeScript frontend foundation for **Shaivika IT Technologies** (Part of Shaivika Groups). Engineered with modern enterprise software studio aesthetics, responsive layouts, Tailwind CSS v4, and clean modular component boundaries.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18.0.0 or later (v24 LTS recommended)
- **npm**: v9.0.0 or later

### Installation & Local Development
```bash
# 1. Clone repository (or navigate to project workspace)
cd "shaivika it technologies"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in browser
# http://127.0.0.1:5173/
```

---

## 🛠 Available Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with hot module replacement (HMR). |
| `npm run build` | Runs TypeScript compilation checks (`tsc -b`) and builds production assets to `dist/`. |
| `npm run lint` | Runs static code analysis across all TypeScript & React files. |
| `npm run type-check` | Runs TypeScript strict type checking without emitting files (`tsc --noEmit`). |
| `npm run preview` | Starts a local web server to preview the production build output from `dist/`. |

---

## 🏛 Architecture & Project Structure

The project is structured into modular layers to allow multiple developers to work concurrently on different sections, data schemas, or UI components without merge conflicts:

```
shaivika-it-technologies/
├── public/
│   ├── favicon.svg             # Precision SVG brand logo
│   └── icons.svg
├── src/
│   ├── assets/                 # Static imagery, brand marks, and SVGs
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Fixed navbar, brand mark, desktop & mobile menu drawer
│   │   │   ├── Footer.tsx      # Enterprise footer with verified contact & quick links
│   │   │   └── Container.tsx   # Reusable responsive width & padding container
│   │   ├── ui/
│   │   │   ├── Button.tsx      # Accessible button & anchor component with variants
│   │   │   ├── SectionHeading.tsx # Standardized section badge, title & subtitle
│   │   │   └── Badge.tsx       # Reusable status, tag, and verification badges
│   │   └── sections/
│   │       ├── HeroSection.tsx # Headline, CTAs, interactive software preview
│   │       ├── ProofSection.tsx # Verified standards & client integration slots
│   │       ├── ServicesSection.tsx # 5 authentic capability cards
│   │       ├── ProjectsSection.tsx # 3 reusable case studies with placeholder markers
│   │       ├── ProcessSection.tsx  # 7-stage delivery lifecycle (Discover → Support)
│   │       ├── WhyShaivikaSection.tsx # 3 authentic company differentiators
│   │       ├── TestimonialsFAQSection.tsx # Testimonial layouts & interactive FAQ
│   │       └── ContactSection.tsx  # Client-side validated scoping inquiry form
│   ├── data/
│   │   ├── services.ts         # Typed dataset for services & deliverables
│   │   ├── projects.ts         # Typed dataset for featured work & tech stacks
│   │   ├── faq.ts              # Typed dataset for FAQs & testimonial slots
│   │   └── navigation.ts       # Navigation links & verified contact details
│   ├── lib/
│   │   └── utils.ts            # clsx & tailwind-merge helper function
│   ├── pages/
│   │   └── HomePage.tsx        # Homepage skeleton composition
│   ├── styles/
│   │   └── index.css           # Tailwind CSS v4 design tokens and theme layers
│   ├── App.tsx                 # Root layout with accessible Skip Link
│   └── main.tsx                # React entry point
├── .env.example                # Safe environment variable template (no secrets)
├── .gitignore                  # Git ignore rules for node_modules, dist, env, and IDEs
├── index.html                  # Accessible HTML5 document template
├── package.json                # Project dependencies and script definitions
├── tsconfig.json               # TypeScript project references
├── tsconfig.app.json           # Application TypeScript compiler options
└── vite.config.ts              # Vite configuration with @tailwindcss/vite plugin
```

---

## 🎨 Design Tokens & UI Guidelines

### Palette
- **Backgrounds**: Deep Navy & Charcoal (`#070B14`, `#0A0F1D`, `#0F172A`)
- **Surfaces**: Dark Elevated Slate (`#131D33`, `#18233C`)
- **Accent**: Electric Sky & Cyan (`#0EA5E9`, `#38BDF8`, `#0284C7`)
- **Borders**: Restrained subtle boundaries (`border-slate-800/80`, `border-slate-700/60`)
- **Typography**: Clean, geometric readability with Google Font *Plus Jakarta Sans*

### Shared UI Components
1. **`<Button>`**: Supports `variant="primary" | "secondary" | "outline" | "ghost"`, sizes `sm | md | lg`, left/right icons, loading spinners, and automatic polymorphic conversion to `<a>` when `href` is supplied.
2. **`<Container>`**: Enforces responsive page boundaries (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) preventing horizontal overflow on mobile viewports.
3. **`<SectionHeading>`**: Standardizes section badges, titles, and supporting paragraphs across desktop and mobile.
4. **`<Badge>`**: Renders status tags (`cyan`, `slate`, `verified`, `placeholder`).

---

## 👥 Team Collaboration Guidelines (4-Developer Setup)

To allow 4 frontend engineers to build out sections simultaneously without merge conflicts:

| Developer | Assigned Scope | Key Files |
| :--- | :--- | :--- |
| **Developer 1 (Core & Layout)** | Header, Footer, Navigation, Global Theme | `src/components/layout/*`, `src/styles/index.css`, `src/data/navigation.ts` |
| **Developer 2 (Hero & Capabilities)** | HeroSection, ProofSection, ServicesSection | `src/components/sections/HeroSection.tsx`, `ProofSection.tsx`, `ServicesSection.tsx`, `src/data/services.ts` |
| **Developer 3 (Portfolio & Process)** | ProjectsSection, ProcessSection, WhyShaivika | `src/components/sections/ProjectsSection.tsx`, `ProcessSection.tsx`, `WhyShaivikaSection.tsx`, `src/data/projects.ts` |
| **Developer 4 (Validation & Inquiries)** | ContactSection, TestimonialsFAQSection | `src/components/sections/ContactSection.tsx`, `TestimonialsFAQSection.tsx`, `src/data/faq.ts` |

### Contribution Best Practices:
- **Keep Section Content in Data Files**: Always update `src/data/*.ts` rather than hardcoding long text in JSX.
- **Run Quality Checks Before Commits**:
  ```bash
  npm run type-check
  npm run lint
  npm run build
  ```
- **Respect Motion Preferences**: All animations and transitions automatically respect `prefers-reduced-motion: reduce`.
- **Placeholder Transparency**: When adding temporary mock assets, use the `<Badge variant="placeholder">` component so stakeholders can clearly distinguish between verified client data and design slots.

---

## 📦 Verified Company Information

- **Company**: Shaivika IT Technologies (Part of Shaivika Groups)
- **Headquarters**: Kadapa, Andhra Pradesh, 516001, India
- **Phone / WhatsApp**: `+91 7981431094`
- **Email**: `shaivikagroups@gmail.com`
- **LinkedIn**: [https://www.linkedin.com/in/shaivika-groups-7823ab362](https://www.linkedin.com/in/shaivika-groups-7823ab362)
- **Instagram**: [https://www.instagram.com/shaivika_india](https://www.instagram.com/shaivika_india)

---

## 🔧 GitHub Repository Setup Instructions

To push this codebase to a new GitHub repository:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage all files
git add .

# 3. Create the initial commit
git commit -m "feat: initial enterprise frontend foundation for Shaivika IT Technologies"

# 4. Set main branch
git branch -M main

# 5. Add your remote GitHub repository
git remote add origin https://github.com/<your-organization-or-user>/shaivika-it-technologies.git

# 6. Push initial commit to main
git push -u origin main
```
