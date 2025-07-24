import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/app/navigation';
import { Footer } from './components/app/footer';
import { routes } from './routes';
import { Toaster } from '@flagster/ui';
import { ThemeProvider } from './hooks/use-theme';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <BrowserRouter>
          <Navigation />
          <main className="container mx-auto py-8 px-4 pt-20">
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
