import { homeRoutes } from '@/features/home/pages/HomePage/routes';
import { ExperienceRoutes } from '@/features/experiences/pages/ExperienceDetails/routes';

export const customerRoutes = [
    ...homeRoutes,
    ...ExperienceRoutes,
];
