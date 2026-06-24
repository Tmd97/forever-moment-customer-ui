# Category Feature
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
