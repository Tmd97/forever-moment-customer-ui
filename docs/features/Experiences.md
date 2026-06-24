# Experiences Feature
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
