import os

docs = {
    "docs/components/Hero.md": """# Hero Component
Path: `src/components/home/Hero.tsx`

## Detailed Overview
The `Hero` component operates as the primary focal point on the landing page. It is responsible for rendering a full-width image carousel that crossfades automatically, presenting a search bar, and displaying a location dropdown for targeted marketing. 

## Dependencies
- **Framer Motion**: Uses `AnimatePresence` and `motion.div` for crossfading images and bringing in text elements from the bottom.
- **Lucide React / React Icons**: Uses `FiChevronLeft`, `FiChevronRight`, and `FiSearch` for UI elements.
- **React Router**: Uses `useNavigate` for redirecting searches to the `/search` route.

## Props & State
| State Variable | Type | Description |
|----------------|------|-------------|
| `current` | `number` | The index of the currently active slide. |
| `paused` | `boolean` | Toggled to `true` when the user hovers over the slider, pausing the `setInterval` auto-play. |
| `searchQuery` | `string` | Controlled input state for the search bar. |

## Internal Flow
1. **Auto-Play Loop**: An internal `useEffect` sets up a 5-second `setInterval` to increment the `current` index. The interval is cleared on unmount or when `paused` is true.
2. **Search Logic**: Pressing the 'Search' button or hitting Enter inside the input calls `handleSearch()`, which pushes the encoded query to `/search?q=...`.
3. **Location Handling**: It dynamically populates the Location dropdown by accepting locations from the Redux store (passed down typically or fetched independently).

## Customization
To change the slide timings, modify the transition duration inside `<motion.div transition={{ duration: 0.9 }}>` and the auto-play timer `setInterval(..., 5000)`.
""",
    "docs/components/StatsBar.md": """# StatsBar & TrustBar Components
Paths: 
- `src/components/StatsBar/StatsBar.tsx`
- `src/components/home/TrustBar.tsx`

## Detailed Overview
These components act as social proof elements placed strategically after the Hero section. They provide reassuring metrics to potential customers.

### StatsBar (`StatsBar.tsx`)
- **Structure**: A 4-column CSS grid on desktop, shifting to a 2-column layout on mobile.
- **Styling**: Utilizes `var(--cream)` backgrounds with gold/burgundy typography.
- **Data**: Statically rendered array of objects containing `number` (e.g. `1M+`), `label` (e.g. `Experiences Delivered`), and lucide-react icons.

### TrustBar (`TrustBar.tsx`)
- **Structure**: A simpler, single-row layout highlighting "Certified Planners" and "Secure Payments".
- **Usage**: Used specifically as a divider between the Quick Categories and the Featured Experiences sections.

## Props
These components are entirely **presentational** and currently do not accept any dynamic props. If dynamic metrics from the backend are needed, the internal static array (`stats`) should be replaced by a Redux selector mapping.

## Code Example
```tsx
import StatsBar from '@/components/StatsBar/StatsBar';

// Rendering inside the HomeView
export default function HomeView() {
    return (
        <div className="home-container">
            <Hero />
            <StatsBar /> {/* Injected immediately below the fold */}
        </div>
    );
}
```
""",
    "docs/components/DecorSliders.md": """# DecorSliderSection Component
Path: `src/components/home/DecorSliderSection.tsx`

## Detailed Overview
`DecorSliderSection` is a highly reusable, horizontal scrolling carousel specifically built for categorical product displays (e.g., Anniversary Decor, Birthday Themes). It is designed to be instantiated multiple times on the Home page with alternating background colors.

## Props Interface
```typescript
interface DecorItem {
    id: string;
    image: string;
    title: string;
    price: number;
    rating: number;
    reviews: number;
    isNew?: boolean;
}

interface SliderConfig {
    id: string;
    title: string;
    subtitle: string;
    viewAllLink: string;
    items: DecorItem[];
}

interface DecorSliderSectionProps {
    slider: SliderConfig;
    bg: 'white' | 'cream';
}
```

## Internal Architecture
- **Swiper.js / Embla**: The component wraps its children in a drag-and-swipe enabled carousel library to ensure a native app-like feel on mobile devices.
- **Hover Effects**: Implements heavy CSS transforms (`hover:-translate-y-2`, `hover:shadow-2xl`) using Tailwind.
- **Background Alternation**: The `bg` prop dynamically injects `bg-white` or `bg-[#FDFAF4]` to create visual separation when multiple sliders are stacked vertically.

## Global Data Source
Typically, the `slider` prop is sourced from a localized data file (`src/data/decorSliders.ts`), but it is fully typed to accept backend JSON payloads mapped via Redux.
""",
    "docs/components/Footer.md": """# Footer Component
Path: `src/components/navigation/footer/index.tsx`

## Detailed Overview
The application Footer is a static layout component that resides at the bottom of the `CustomerLayout`. It handles SEO-relevant internal linking, company contact information, and social media links.

## Layout Hierarchy
The Footer is broken down into two primary visual blocks:
1. **Top Grid (`max-w-[1380px] grid-cols-1 md:grid-cols-4`)**:
   - **Column 1**: Brand Logo (FOREVER MOMENT), tagline, and Social Icons (`lucide-react`).
   - **Column 2**: "Quick Links" iterating over a static array `['About Us', 'Our Services', 'Vendor Network', ...]`.
   - **Column 3**: "Categories" iterating over a static array `['Wedding Decor', 'Birthday Bash', ...]`.
   - **Column 4**: "Get In Touch" displaying MapPin, Phone, and Mail icons with respective contact details.
2. **Bottom Bar**: Contains copyright strings, Privacy Policy links, and Terms & Conditions.

## Styling Variables
The Footer uses dark theme branding heavily relying on:
- Background: `bg-[#1A1208]` (Deep Charcoal/Brown)
- Text colors: `text-white/70`, `text-[#C9A84C]` (Gold accent for icons).

## Customization
To change the links, locate the `quickLinks` and `categories` arrays at the top of the file:
```tsx
const quickLinks = [
  "About Us",
  "Our Services",
  // Edit here
];
```
""",
    "docs/components/FloatingBookingCTA.md": """# Floating UI Components
Paths:
- `src/components/FloatingBookingCTA/index.tsx`
- `src/components/home/WhatsAppButton.tsx`

## Detailed Overview
These two components exist strictly to drive conversions by providing the user with persistent access to support and booking actions, regardless of scroll depth.

### FloatingBookingCTA (`index.tsx`)
- **Responsive Logic**: Often configured to only appear on mobile devices (`hidden md:flex`).
- **Positioning**: Uses `fixed bottom-0 left-0 w-full z-50` to lock to the bottom edge of the viewport on mobile browsers, often above the `BottomNav`.
- **Purpose**: Usually points directly to `/services` or a generic "Request a Quote" form.

### WhatsAppButton (`WhatsAppButton.tsx`)
- **Positioning**: Fixed to the bottom-right corner (`fixed bottom-6 right-6 z-50`).
- **Animation**: Contains a pulsing ring animation (`animate-ping`) around the WhatsApp logo to draw the user's eye.
- **Link Logic**: Opens an `api.whatsapp.com` link dynamically pointing to the business's support number.

## Layout Integration
Both components are rendered centrally inside the `CustomerLayout.tsx` so that they do not need to be manually imported onto individual Page Views.
""",
    "docs/features/Home.md": """# Home Feature Architecture
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
""",
    "docs/features/Category.md": """# Category Feature
Path: `src/features/category/`

## Detailed Overview
The Category module manages fetching and rendering the core product taxonomy of the application.

## Redux State Mapping
The `category` slice in `src/store/store.ts` tracks:
- `categories`: An array of category objects retrieved from `/api/platform/public/categories`.
- `loading`: Boolean indicating network activity.

## Key Components

### 1. `CategoryList`
- **Path**: `src/features/category/pages/CategoryList/components/CategoryList.tsx`
- **UI Structure**: A CSS Grid layout mapping over the `categories` array. Each card displays a category image and title, heavily reliant on standard Tailwind utility classes.
- **Click Behavior**: Routes the user to `/services?category={category.id}`.

### 2. `CategorySlider`
- **Path**: `src/components/home/CategorySlider.tsx`
- **Usage**: A horizontal scrolling alternative to the `CategoryList`, designed specifically to fit into the dense `HomeView` stack without taking up excessive vertical space.

## Extension Guide
If the backend adds subcategories, the `categories` state should be updated to type `Category & { subcategories: SubCategory[] }`. The `Navbar` already anticipates this structure for its Mega Menu.
""",
    "docs/features/Experiences.md": """# Experiences Feature
Path: `src/features/experiences/`

## Detailed Overview
Experiences refer to pre-packaged, "no planning needed" events (e.g., romantic dinners, yacht parties). This feature specifically handles rendering high-ticket items.

## `FeaturedExperience` Component
- **Path**: `src/features/experiences/pages/FeaturedExperience/components/FeaturedExperienceView.tsx`
- **Responsibility**: Takes the top N experiences (defined by the `limit` prop) and displays them in an overlapping, premium card UI.
- **Data Hooking**: The parent container (`index.tsx`) uses `connect()` to map `state.experiences` to the `experiences` prop of `FeaturedExperienceView`.

## Prop Types
```typescript
interface Experience {
    id: string;
    title: string;
    price: number;
    location: string;
    duration: string;
    rating: number;
    image: string;
    bookedToday?: number;
    category?: string;
}

interface FeaturedExperienceProps {
    experiences: Experience[];
    loading: boolean;
    limit?: number; // Caps the number of items displayed on the home page
}
```
""",
    "docs/features/Slider.md": """# Slider Feature
Path: `src/features/slider/`

## Detailed Overview
The Slider feature historically managed the global homepage slider driven directly by a backend CMS API. 

## Current Implementation Status
> [!NOTE]
> Based on the recent UI parity update to match `event-decoration-main`, the Redux-driven `<Slider />` component in `HomeView` has been actively replaced by the static `<Hero />` component. 

However, the Slider infrastructure remains intact for use in other parts of the application or for future dynamic integrations.

## Architecture
- **State**: `state.slider.slides` holds the array of image URLs and CTA strings.
- **Component**: `src/features/slider/pages/Slider/components/Slider.tsx` parses these slides and injects them into an `AnimatePresence` stack for cross-fading.
- **Search Integration**: Contains a deeply nested `<input>` field hooked to React Router's `useNavigate`.

To re-enable dynamic slides, simply swap `<Hero />` back to `<Slider />` inside `src/features/home/pages/Home/components/HomeView.tsx`.
""",
    "docs/core/Store.md": """# Global Store Architecture (Redux)
Path: `src/store/`

## Detailed Overview
The application uses Redux Toolkit (`@reduxjs/toolkit`) coupled with traditional Redux Thunk action creators. The architecture is strictly sliced by domain.

## The State Tree
The `RootState` is composed of the following slices:
```typescript
{
  home: {
    featuredExperiences: Experience[],
    locations: Location[],
    selectedLocation: string,
    loading: boolean,
    error: string | null
  },
  category: {
    categories: Category[],
    loading: boolean
  },
  slider: {
    slides: Slide[],
    loading: boolean
  }
}
```

## API Client & Interceptors
The application avoids third-party clients like Axios in favor of the native `fetch` API. 
Because `fetch` does not automatically throw errors on HTTP 4xx/5xx status codes, the `api.ts` files manually guard the responses:
```typescript
const response = await fetch('/api/endpoint');
if (!response.ok) {
    throw new Error('Network error or 400+ status');
}
```
This guarantees that the `.catch()` blocks inside the Thunk actions (`actions.ts`) are always hit, allowing the `FAILURE` action to be cleanly dispatched to the reducer.

## Dispatching from Components
Components should connect to the store using modern React-Redux hooks rather than `connect()` when writing new code:
```tsx
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCategories } from '@/features/category/store/actions';

export const MyComponent = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.category.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);
};
```
"""
}

for path, content in docs.items():
    with open(path, "w") as f:
        f.write(content)
print("All docs aggressively expanded successfully.")
