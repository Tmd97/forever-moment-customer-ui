import { homeRoutes } from '@/features/home/pages/routes';
import { dummyRoutes } from '@/features/dummy/routes';

export const customerRoutes = [
    ...homeRoutes,
    ...dummyRoutes,
];
