# Footer Component
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
