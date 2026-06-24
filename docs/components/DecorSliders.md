# DecorSliderSection Component
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
