# Forever Moment Customer UI - Architecture & Onboarding Guide

Welcome to the Forever Moment Customer UI project! This document provides a high-level overview of the application architecture, file structure, and development patterns to help you get up to speed quickly.

## 🏗️ Architecture Overview

This project is a React application built with **Vite**, **TypeScript**, and **Redux Toolkit**. It follows a **Feature-Based Architecture** where each UI section/feature is self-contained with its own pages, components, store, and styles.

### Key Technologies
- **Framework**: React 19 + Vite
- **State Management**: Redux Toolkit (action-types, actions, reducer pattern)
- **Styling**: Tailwind CSS (layout) + SCSS Modules (components, inputs, buttons, tables)
- **Routing**: React Router v7
- **Configuration**: Dynamic JSON-based configuration

---

## 📂 Project Structure

The `src` directory is organized using a **Colocation Pattern** — related code lives together.

```
src/
├── config/              # Centralized configuration (Navigation, Forms, Routes)
│   ├── navigation.json  # Sidebar menu structure
│   ├── forms.json       # Dynamic form definitions
│   ├── tables.json      # Table column definitions
│   └── ...
│
├── features/            # Core business logic features
│   ├── header/          # Header/Navigation feature
│   ├── home/            # Home page feature
│   ├── slider/          # Hero slider feature
│   ├── experiences/     # Experiences feature
│   ├── packages/        # Packages feature
│   ├── balloonDecor/    # Balloon decor feature
│   ├── premiumEventDecoration/  # Premium event decor
│   ├── featureServices/ # Featured services section
│   ├── whyChooseUs/     # Why Choose Us section
│   ├── beforeAfterSlide/ # Before/After comparison
│   └── routes.tsx       # Aggregated customer routes
│
├── components/          # Shared/Generic UI components
│   ├── FloatingBookingCTA/
│   ├── GiftSlider/
│   ├── PopularSearch/
│   ├── QuickHighlight/
│   ├── navigation/
│   └── search/
│
├── store/               # Global Redux store configuration
│   ├── config/          # Configuration state (action-types, actions, reducer)
│   ├── store.ts         # Main store (configureStore)
│   ├── reducers.ts      # Root reducer combining feature slices
│   ├── hooks.ts         # Typed useAppDispatch, useAppSelector
│   └── status.ts        # Async state utilities
│
├── layouts/             # Application layouts
│   └── CustomerLayout.tsx
│
├── styles/              # Global SCSS styles
│   ├── app.scss
│   ├── main.scss
│   ├── theme.scss
│   └── variables.scss
│
├── assets/              # Static assets
│   ├── icons/
│   └── images/
│
├── services/            # Global services (Config loading)
├── types/               # TypeScript type definitions
├── utils/               # Utility functions (Http, date, storage)
├── lib/                 # Library utilities
└── router/              # Route definitions (Public, Private, Protected)
```

### Feature Module Structure

Every feature follows the same internal structure:

```
features/<featureName>/
├── index.ts             # Barrel file (public API)
├── pages/
│   └── <PageName>/
│       ├── index.tsx    # Connected container component
│       ├── routes.tsx   # Feature-specific routes
│       ├── components/  # Page-specific components
│       └── css/         # Page-specific styles (.scss)
└── store/
    ├── action-types.ts  # Action constants
    ├── actions.ts       # Action creators & thunks
    ├── reducer.ts       # Switch-case reducer
    └── api.ts           # API calls
```

---

## 🔄 Data Flow

We use **Redux Toolkit** for state management. The data flow follows a unidirectional pattern:

1. **Component** dispatches an **Action** (e.g., `getCategories()`)
2. **Thunk** (in `store/actions.ts`) makes an API call via **api.ts**
3. **Reducer** (in `store/reducer.ts`) updates the **State** based on the action type
4. **Selector** retrieves data from State to update the **Component**

### Example: Header Feature
- **Actions**: `src/features/header/store/actions.ts`
- **Reducer**: `src/features/header/store/reducer.ts`
- **API**: `src/features/header/store/api.ts`
- **Barrel**: `src/features/header/index.ts`

---

## ⚙️ Dynamic Configuration System

The application is **configuration-driven**. Many UI aspects are controlled by JSON files in `src/config/` rather than hardcoded logic.

- **Navigation**: Menu structure defined in `navigation.json`
- **Forms**: Form fields and validation in `forms.json`
- **Tables**: Column definitions in `tables.json`

**Implication for Developers**:
- When adding a new menu item, check `navigation.json` first
- The `configService.ts` handles loading these configurations on app startup

---

## 🚀 Development Workflow

### Adding a New Feature
1. Create directory: `src/features/<featureName>/`
2. Add **Store**: Create `store/action-types.ts`, `actions.ts`, `reducer.ts`, and `api.ts`
3. Add **Pages**: Create `pages/<PageName>/index.tsx` with `components/` and `css/`
4. Add **Barrel**: Create `index.ts` re-exporting the page and store
5. Add **Route**: Add routes in `pages/<PageName>/routes.tsx`
6. Register reducer in `src/store/store.ts`

### Styling
- Use **Tailwind CSS** utility classes for layout and spacing
- Use **CSS / SCSS modules** for inputs, buttons, and tables
- Keep styles consistent with the customer theme (`src/styles/`)

---

## 📝 Naming Conventions

- **Feature folders**: `camelCase` (e.g., `balloonDecor`, `whyChooseUs`)
- **Page folders**: `PascalCase` (e.g., `HeaderPage`, `ExperienceDetails`)
- **Components**: `PascalCase` (e.g., `EventThemesPreview.tsx`)
- **Functions/Variables**: `camelCase` (e.g., `fetchCategories`)
- **Slice names**: `camelCase` (e.g., `name: 'header'`)

---

## 🤝 Contributing

1. Create a feature branch
2. Follow the folder structure and naming conventions
3. Ensure your code is typed strictly (avoid `any`)
4. Run `npm run build` locally to verify no type errors before pushing
