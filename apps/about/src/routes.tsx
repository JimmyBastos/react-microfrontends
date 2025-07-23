import { RouteObject } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/about',
    element: <About />,
  },
];

export const navigationItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
] as const;
