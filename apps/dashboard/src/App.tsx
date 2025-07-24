import { Toaster } from '@flagster/ui';
import { Dashboard } from './pages/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import './styles/global.css';

function App() {
  const [queryClient, setQueryClient] = useState<QueryClient | null>(null);

  useEffect(() => {
    // @ts-expect-error: Remote import does not have type declarations
    import('shell/QueryClient')
      .then((module) => setQueryClient(module.queryClient || new QueryClient()))
      .catch(() => setQueryClient(new QueryClient()));
  }, []);

  if (!queryClient) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
