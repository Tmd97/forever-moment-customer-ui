import { createBrowserRouter } from 'react-router-dom';
import CustomerLayout from '@/layouts/CustomerLayout';
import { customerRoutes } from '@/features/routes';

export const router = createBrowserRouter([
  // Customer Routes
  {
    path: '/',
    element: <CustomerLayout />,
    children: customerRoutes,
  },
]);
