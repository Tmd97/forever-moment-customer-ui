import { createBrowserRouter } from 'react-router-dom';
import { PublicRoute } from './Public';

// Customer routes
import { homeRoutes } from '@/features/home/pages/routes';
import { ExperienceRoutes } from '@/features/Experiences/pages/experienceDetails/routes';

/**
 * Main application router configuration
 * Combines public, private, and protected routes
 */
export const router = createBrowserRouter([
    // Public routes (accessible to all)
    {
        element: <PublicRoute />,
        children: [
            ...homeRoutes,
            ...ExperienceRoutes
        ],
    },

    // Add more route groups as needed
]);
