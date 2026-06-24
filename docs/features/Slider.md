# Slider Feature
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
