#  Used Cars Platform

Welcome to **Kalyani TrueValue**, a modern, fully responsive Next.js web application for browsing and discovering used cars by body type. This project demonstrates best practices in React, Next.js, TypeScript, and modular folder structure for scalable development.

---

## 📁 Folder Structure

```text
├── app/                # Next.js app directory (routing, global styles)
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/         # Reusable UI and feature components
│   ├── common/         # Shared components (header, car cards)
│   ├── hero/           # Hero section components
│   ├── ui/             # UI primitives (button, card, input, etc.)
│   └── used-cars/      # Used cars feature (tabs, main view)
├── constants/          # Static data and configuration
├── lib/                # Utility functions
├── public/             # Static assets (images, SVGs)
│   └── assets/         # Organized images by feature/component
├── types/              # TypeScript type definitions
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── next.config.ts      # Next.js configuration
├── eslint.config.mjs   # ESLint configuration
├── postcss.config.mjs  # PostCSS configuration
└── README.md           # Project documentation
```

---

## 🌟 Features

- **Fully Responsive Design**: Mobile-first, adapts to all screen sizes
- **Modular Components**: Clean separation for scalability and reusability
- **TypeScript Support**: Type-safe codebase for reliability
- **Modern UI**: Uses custom UI primitives and Lucide icons
- **Body Type Tabs**: Browse used cars by body type
- **Next.js Routing**: App directory structure for easy navigation

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/AmjustGettingStarted/truevalue-practice.git
cd kalyani-truevalue
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 🖥️ Responsive Design

- Uses **Tailwind CSS** for utility-first styling
- All components adapt to mobile, tablet, and desktop
- Example:

```tsx
<div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Responsive container */}
</div>
```

---

## 🧩 Key Components

- `components/common/`
  - `header.tsx`: Site header/navigation
  - `car-card.tsx`, `car-card-verticle.tsx`: Car display cards
- `components/hero/`
  - `hero.tsx`, `hero-tab.tsx`: Hero section and tabs
- `components/ui/`
  - `button.tsx`, `card.tsx`, `input.tsx`, etc.: UI primitives
- `components/used-cars/`
  - `used-cars.tsx`: Main used cars view
  - `body-type-tabs.tsx`: Tabs for filtering by body type

---

## 🛠️ Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run lint`  | Run ESLint checks        |

---

## 📦 Dependencies

- **Next.js**: React framework for SSR/SSG
- **React**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **Lucide-react**: Modern icons

---

## 🖼️ Assets

- All images and SVGs are stored in `public/assets/` and organized by feature/component for easy access and maintainability.

---
