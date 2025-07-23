import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/app/navigation';
import { ErrorBoundary } from './components/app/error-boundary';
import { routes } from './routes';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto py-8 px-4 pt-20">
        {/* <ErrorBoundary> */}
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        {/* </ErrorBoundary> */}
      </main>
    </div>
  );
}

export default App;
