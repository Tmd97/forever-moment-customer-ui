# Application Layouts
Path: `src/layouts/CustomerLayout.tsx`

## Overview
The Layout system defines the persistent, high-level structure that wraps around individual pages (Views). We primarily use `CustomerLayout` for all public-facing and customer-authenticated routes.

## Layout Structure
The `CustomerLayout` is composed of the following vertical flow:
1. **Top Navigation**: `<Navbar />` (includes fixed positioning to stay atop the viewport).
2. **Main Content Area**: `<main className="relative z-0 flex-1"><Outlet /></main>`. React Router injects the matched child route here.
3. **Floating Overlays**:
   - `<FloatingBookingCTA />`
   - `<WhatsAppButton />`
4. **Bottom Navigation**: `<BottomNav />` (visible on mobile only).
5. **Footer**: `<Footer />` (contains all auxiliary links, social media, and SEO footers).

## Handling Authentication States
Currently, the layout does not strictly guard routes. Authentication guarding is done at the routing level (`src/router/index.tsx`) or via specific higher-order components.

## Adding a New Layout
If building an Admin dashboard or a vendor portal:
1. Create `src/layouts/AdminLayout.tsx`.
2. Add it to `src/router/index.tsx` mapping to `/admin/*`.
