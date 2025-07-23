import { Loader, Loader2 } from 'lucide-react';
import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { LoadingSpinner } from './components/app/loading-spinner';
import { Container } from '@flagster/ui';

const About = () => <div />;

const Dashboard = lazy(() =>
  // @ts-expect-error: Remote import does not have type declarations
  import('dashboard/Dashboard').then((module) => ({
    default: module.Dashboard,
  })),
);

console.log('Dashboard', typeof Dashboard, Dashboard);

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
    element: <About />,
  },
];

export const navigationItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
] as const;
