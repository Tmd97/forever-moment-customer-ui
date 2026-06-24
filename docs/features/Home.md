# Home Feature Architecture
Path: `src/features/home/`

## Detailed Overview
The Home Feature is the most complex view in the application. It acts as an orchestrator component (`HomeView.tsx`) that stitches together over 15 distinct sections to form a long-scrolling landing page.

## Directory Structure
```text
src/features/home/
├── pages/
│   └── Home/
│       ├── components/
│       │   └── HomeView.tsx    # The orchestrated layout
│       └── index.tsx           # The connected wrapper
├── store/
│   ├── actions.ts              # Redux thunks
│   ├── api.ts                  # Fetch API methods
│   └── reducer.ts              # State management
└── css/
```

## Data Fetching Lifecycle
When `HomeView.tsx` mounts:
1. The `useEffect` hook fires.
2. It executes `getFeaturedExperiences()` and `getLocations()`.
3. If `loading === true`, the screen renders a generic "Loading..." overlay (`bg-[var(--cream)]`).
4. If `error !== null`, an error boundary is shown.
5. If successful, the massive vertical stack of components is rendered.

## Component Stack Map
The `HomeView` explicitly renders:
1. `<Hero />` (Slider)
2. `<QuickCategories />` (Circle icons)
3. `<StatsBar />` & `<TrustBar />`
4. `<Occasions />`
5. `<FeaturedExperience limit={3} />` (Connected to Redux)
6. `<PromoBanners />`
7. A loop of `<DecorSliderSection />` interleaved with `<CategorySlider />` and `<ComboDeals />`.
8. `<FeaturedBanner />`
9. Auxiliary sections (`FlowerPicker`, `WhyChooseUs`, `Testimonials`, `FAQ`, `Gallery`, `BlogSection`).

## Modifying the Home Page
To remove or reorder a section, simply manipulate the JSX tree inside `HomeView.tsx`. Because data fetching is isolated to the specific components or injected at the top level, reordering sections will not break application state.
