# Hero Component
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
