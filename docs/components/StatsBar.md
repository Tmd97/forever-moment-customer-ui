# StatsBar & TrustBar Components
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
