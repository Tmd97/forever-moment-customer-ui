import os

docs = {
    "docs/components/Navbar.md": """# Navbar Component
Path: `src/components/navbar/Navbar.tsx`

## Purpose
The `Navbar` component serves as the primary navigation header for the application. It provides access to categories, locations, search functionality, and user account actions. It features a responsive design with a mega-menu for desktop and a sidebar for mobile.

## State & Data
- Connects to the Redux store to fetch `categories` and `locations`.
- Dispatches `getCategories` and `getLocations` actions on mount.

## Props
None. Uses global state via `useAppSelector` and `useAppDispatch`.

## Usage
```tsx
import Navbar from '@/components/navbar/Navbar';

<Navbar />
```
""",
    "docs/components/Hero.md": """# Hero Component
Path: `src/components/home/Hero.tsx`

## Purpose
The `Hero` component is the first section displayed on the Home page. It features an image slider with animated text and an integrated search bar and location picker.

## Features
- Cross-fading background images with `framer-motion`.
- Auto-play functionality.
- Integrated search bar to navigate to `/search`.

## Usage
```tsx
import Hero from '@/components/home/Hero';

<Hero />
```
""",
    "docs/components/StatsBar.md": """# StatsBar & TrustBar Components
Paths: 
- `src/components/StatsBar/StatsBar.tsx`
- `src/components/home/TrustBar.tsx`

## Purpose
These components display static statistics and trust metrics (e.g., "1M+ Experiences Delivered", "4.9/5 Rating") to build user confidence.

## Usage
```tsx
import StatsBar from '@/components/StatsBar/StatsBar';
import TrustBar from '@/components/home/TrustBar';

<StatsBar />
<TrustBar />
```
""",
    "docs/components/DecorSliders.md": """# DecorSliderSection Component
Path: `src/components/home/DecorSliderSection.tsx`

## Purpose
A reusable slider component used to display categorized items (e.g., specific decor themes) horizontally.

## Props
| Prop | Type | Description |
|------|------|-------------|
| `slider` | `Object` | Configuration object containing title, description, and an array of items. |
| `bg` | `"white" | "cream"` | Background color theme for the section. |

## Usage
```tsx
import DecorSliderSection from '@/components/home/DecorSliderSection';
import { decorSliders } from '@/data/decorSliders';

<DecorSliderSection slider={decorSliders[0]} bg="white" />
```
""",
    "docs/components/Footer.md": """# Footer Component
Path: `src/components/navigation/footer/index.tsx`

## Purpose
The main application footer displaying quick links, categories, contact information, and social media icons.

## Features
- Responsive grid layout.
- Links defined via internal arrays.

## Usage
```tsx
import Footer from '@/components/navigation/footer';

<Footer />
```
""",
    "docs/components/FloatingBookingCTA.md": """# Floating Booking CTA & WhatsApp Button
Paths:
- `src/components/FloatingBookingCTA/index.tsx`
- `src/components/home/WhatsAppButton.tsx`

## Purpose
Provides persistent action buttons across the application.
- **FloatingBookingCTA**: Appears on mobile/scroll for quick booking access.
- **WhatsAppButton**: Fixed floating action button to chat with support on WhatsApp.

## Usage
```tsx
<FloatingBookingCTA />
<WhatsAppButton />
```
""",
    "docs/features/Home.md": """# Home Feature
Path: `src/features/home/pages/Home/components/HomeView.tsx`

## Purpose
The main landing page of the application. It acts as an orchestrator, rendering all the home page sections in a specific order.

## Architecture
- Contains `useEffect` hooks to trigger fetching of required home data (e.g., `getFeaturedExperiences`, `getLocations`).
- Manages loading and error states.

## Integrated Components
Includes Hero, StatsBar, TrustBar, Occasions, PromoBanners, DecorSliderSection, CategorySlider, ComboDeals, and many more.
""",
    "docs/features/Category.md": """# Category Feature
Path: `src/features/category/`

## Purpose
Handles fetching and displaying product categories. 

## Key Components
- `CategoryList`: Grid display of categories.
- `CategorySlider`: Horizontal slider display of categories.

## Redux State
- Slice: `category`
- Actions: `getCategories`
""",
    "docs/features/Experiences.md": """# Experiences Feature
Path: `src/features/experiences/`

## Purpose
Handles fetching and displaying curated experiences.

## Key Components
- `FeaturedExperience`: Connects to Redux to display top experiences. Limits display based on `limit` prop.
""",
    "docs/features/Slider.md": """# Slider Feature
Path: `src/features/slider/`

## Purpose
Handles dynamic sliders configured from the backend API via Redux.

## State
- Slice: `slider`
- Actions: `getSlides`
""",
    "docs/core/Store.md": """# Global Store (Redux)
Path: `src/store/`

## Purpose
Manages the global application state. 

## Configuration
- Built with `@reduxjs/toolkit`.
- Combines reducers from various feature modules (home, header, category, slider).

## Interceptors
- Axios interceptors are used to handle request/response transformations and global error handling.
""",
    "docs/core/Layouts.md": """# Layouts
Path: `src/layouts/CustomerLayout.tsx`

## Purpose
Provides the visual shell for the application.

## Structure
Wraps the application in:
- `Navbar`
- `main` content area (renders `Outlet`)
- `FloatingBookingCTA`
- `WhatsAppButton`
- `BottomNav`
- `Footer`
"""
}

for path, content in docs.items():
    with open(path, "w") as f:
        f.write(content)
print("Documentation generated successfully.")
