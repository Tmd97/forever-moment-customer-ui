import { homeRoutes } from '@/features/home/pages/routes';
import { ExperienceRoutes } from '@/features/experiences/pages/routes';

export const customerRoutes = [
    ...homeRoutes,
    ...ExperienceRoutes,
];
