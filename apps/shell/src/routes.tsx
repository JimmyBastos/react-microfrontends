import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { LoadingSpinner } from './components/app/loading-spinner';
import { Container } from '@flagster/ui';

const Dashboard = lazy(() => import('dashboard/Dashboard'));
const About = lazy(() => import('about/About'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense
        fallback={
          <Container className="items-center content-center">
            <LoadingSpinner />
          </Container>
        }
      >
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense
        fallback={
          <Container className="items-center content-center">
            <LoadingSpinner />
          </Container>
        }
      >
        <About />
      </Suspense>
    ),
  },
];

export const navigationItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
] as const;
